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
				return bitbucketSelectBox.options[bitbucketSelectBox.selectedIndex]
					.text;
			}
			if (githubSelectBox) {
				return githubSelectBox[1].querySelector('.js-select-button').innerHTML;
			}
			return 'error';
		}
		chrome.tabs.executeScript(
			{
				code: '(' + getSelectedBranch + ')();',
			},
			branchTitle => {
				const stringifiedBranchTitle = branchTitle.toString();
				console.log(stringifiedBranchTitle);
				this.isLoading = false;
				if (stringifiedBranchTitle === 'error') {
					this.bitbucketPullRequestView = false;
					return;
				}
				if (stringifiedBranchTitle) {
					this.bitbucketPullRequestView = true;
				}
				const jiraIssue = stringifiedBranchTitle
					.match(/(.)*-(\d)*-/gi)[0]
					.slice(0, -1);
				this.$store.dispatch('saveJiraIssue', jiraIssue);
				chrome.storage.sync.get([`${jiraIssue}-breaking-options`], data => {
					console.log(data[`${jiraIssue}-breaking-options`]);
				});
				chrome.storage.sync.get([`${jiraIssue}-testing-options`], data => {
					console.log(data[`${jiraIssue}-testing-options`]);
				});
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
