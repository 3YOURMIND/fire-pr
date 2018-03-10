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
	methods: {
		updateTitle() {
			this.$store.dispatch('saveTitle', this.title);
		},
	},
	mounted() {
		const scriptToExecute = `document.getElementById('id_description').style.height = '500px'`;
		chrome.tabs.executeScript({
			code: scriptToExecute,
		});

		function getSelectedBranch() {
			const selectBox = document.querySelector(
				'#id_source_group > div.branch-field-container > select',
			);
			return selectBox.options[selectBox.selectedIndex].text;
		}
		chrome.tabs.executeScript(
			{
				code: '(' + getSelectedBranch + ')();',
			},
			branchTitle => {
				this.isLoading = false;
				const jiraIssue = branchTitle
					.toString()
					.match(/(.)*-(\d)*-/gi)[0]
					.slice(0, -1);
				this.$store.dispatch('saveJiraIssue', jiraIssue);
				this.bitbucketPullRequestView = true;
				chrome.storage.sync.get([`title-${jiraIssue}`], data => {
					console.log(data[`title-${jiraIssue}`]);
				});
			},
		);
	},
};
</script>

<style lang="scss" scoped>
@import '../node_modules/purecss/build/pure.css';
@import '../node_modules/purecss/build/grids.css';
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
