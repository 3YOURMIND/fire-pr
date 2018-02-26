<template>
	<div class="pure-g changelog__container">
		<div class="pure-u-1">
			<input type="text" v-model="changelogText" />
			<label>Note</label>
		</div>
		<div class="pure-u-1">
			<button @click="addNote">Add Note</button>
		</div>
		<div class="pure-u-1 pull-request-changelog__button-container" style="margin-top: 0.61em; padding-left: 6%; padding-right: 6%; font-family: 'Roboto'; font-weight: 300; color: #2f4550;">
			<FirePrButton
				:label="'Create Pull Request'"
				@click="finish"
				style="width: calc(100% - 12%);"
			/>
		</div>
	</div>
</template>

<script>
import PrTitleUtility from '../util/pr-title';
import CreateMarkdown from '../util/create-markdown';
import FirePrButton from '../components/FirePrButton.vue';

export default {
	name: 'Changelog',
	components: {
		FirePrButton,
	},
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

<style lang="scss" scoped>
.pull-request-changelog__button-container {
	position: absolute;
	bottom: 6%;
}

.changelog__container {
	font-size: 16px;
}
</style>
