<template>
	<div>
		<input type="text" v-model="changelogText" />
		<label>Note</label>
		<button @click="addNote">Add Note</button>
		<button @click="finish">✨ Create Pull Request</button>
	</div>
</template>

<script>
import PrTitleUtility from '../util/pr-title';
import CreateMarkdown from '../util/create-markdown';

export default {
	name: 'Changelog',
	data() {
		return {
			changelogText: '',
		};
	},
	computed: {
		nextDisabled() {
			const title = this.$store.state.title;
			if (title === '') {
				return true;
			}
			return false;
		},
	},
	methods: {
		addNote() {
			this.$store.dispatch('saveChangelog', { text: this.changelogText });
			this.changelogText = '';
		},
		finish() {
			const calculatedTitle = PrTitleUtility.renderMarkdown({
				heading: this.$store.state.title,
				issueNumber: this.$store.state.jiraIssue,
			});
			let scriptToExecute = `document.getElementById('id_title').value = '${calculatedTitle}'`;
			chrome.tabs.executeScript({
				code: scriptToExecute,
			});
			const markdown = CreateMarkdown.render(this.$store.state);
			scriptToExecute = `document.getElementById('id_description').value = \`${markdown}\``;
			chrome.tabs.executeScript({
				code: scriptToExecute,
			});
			scriptToExecute = `document.getElementById('id_close_anchor_branch').checked = true`;
			chrome.tabs.executeScript({
				code: scriptToExecute,
			});
		},
	},
};
</script>
