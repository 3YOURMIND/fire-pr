<template>
	<div>
		<div v-if="isLoading">Loading...</div>
		<TheNoBitbucketSite v-else-if="!bitbucketPullRequestView" />
		<router-view v-else />
	</div>
</template>

<script>
import TheNoBitbucketSite from './components/TheNoBitbucketSite.vue';

export default {
	components: {
		TheNoBitbucketSite,
	},
	data() {
		return {
			title: '',
			bitbucketPullRequestView: false,
			isLoading: true,
		};
	},
	mounted() {
		const scriptToExecute = `document.getElementById('id_description').style.height = '500px'`;
		chrome.tabs.executeScript({
			code: scriptToExecute,
		});

		function getSelectedBranch() {
			const bitbucketSelectBox = document.querySelector(
				'#id_source_group > div.branch-field-container > select',
			);
			const githubSelectBox = document.querySelectorAll('.commitish-suggester');
			if (bitbucketSelectBox) {
				return {
					branchTitle:
						bitbucketSelectBox.options[bitbucketSelectBox.selectedIndex].text,
					platform: 'bitbucket',
				};
			}
			if (githubSelectBox) {
				return {
					branchTitle: githubSelectBox[1].querySelector('.js-select-button')
						.innerHTML,
					platform: 'github',
				};
			}
			return null;
		}
		chrome.tabs.executeScript(
			{
				code: '(' + getSelectedBranch + ')();',
			},
			branchResponse => {
				this.isLoading = false;
				if (branchResponse[0] === null) {
					this.bitbucketPullRequestView = false;
					return;
				}
				const platform = branchResponse[0].platform;
				this.$store.dispatch('updatePlatform', platform);
				const stringifiedBranchTitle = branchResponse[0].branchTitle.toString();

				if (stringifiedBranchTitle) {
					this.bitbucketPullRequestView = true;
				}
				const jiraIssue = stringifiedBranchTitle
					.match(/(.)*-(\d)*-/gi)[0]
					.slice(0, -1);
				this.$store.dispatch('saveJiraIssue', jiraIssue);
			},
		);
	},
	methods: {
		updateTitle() {
			this.$store.dispatch('saveTitle', this.title);
		},
	},
};
</script>

<style lang="scss" scoped>
@import '../../node_modules/purecss/build/pure.css';
@import '../../node_modules/purecss/build/grids.css';
@import './assets/css/fonts.css';

h4 {
	font-family: 'Roboto';
}

header {
	text-align: center;
}

.fire-app__title-input {
	margin-top: 10px;
	width: 80%;
	margin: auto;
	display: block;
}

.main-container {
	width: 80%;
	margin: auto;
}
</style>
