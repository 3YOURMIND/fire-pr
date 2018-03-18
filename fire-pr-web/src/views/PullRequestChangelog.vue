<template>
	<div class="pure-g changelog__container">
		<div class="pure-u-1 pull-request-changelog__heading-container">
			<h1 class="pull-request-changelog__heading--first">Changelog</h1>
		</div>
		<div class="pure-u-1 pull-request-changelog__label-container">
			<label>Note</label>
		</div>
		<div class="pure-u-1 pull-request-changelog__input-container">
			<input
				autofocus
				class="pull-request-changelog__input"
				name="merger"
				type="text"
				v-model="changelogText"
			/>
		</div>
		<NavigationButtonBar
			:leftLabel="'Back'"
			:rightLabel="'Create'"
			:rightDisabled="!changelogMessageValid"
			@leftClick="goBack"
			@rightClick="finish"
		/>
	</div>
</template>

<script>
import NavigationButtonBar from '../components/NavigationButtonBar.vue';

import PrTitleUtility from '../util/pr-title';
import CreateMarkdown from '../util/create-markdown';

export default {
	name: 'PullRequestChangelog',
	components: {
		NavigationButtonBar,
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
		changelogMessageValid() {
			return this.changelogText !== '';
		},
	},
	mounted() {
		if (this.$store.state.changelog.text === '') {
			chrome.storage.sync.get(
				[`${this.$store.state.jiraIssue}-changelog`],
				data => {
					if (data[`${this.$store.state.jiraIssue}-changelog`].text !== '') {
						this.changelogText =
							data[`${this.$store.state.jiraIssue}-changelog`].text;
					}
				},
			);
		} else {
			this.changelogText = this.$store.state.changelog.text;
		}
	},
	methods: {
		goBack() {
			this.addNote();
			this.$router.back();
		},
		addNote() {
			this.$store.dispatch('saveChangelog', { text: this.changelogText });
			this.changelogText = '';
		},
		finish() {
			if (!this.changelogMessageValid) {
				return;
			}
			this.addNote();
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
.pull-request-changelog__label-container {
	margin-top: 0.61em;
	padding-left: 6%;
	padding-right: 6%;
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
}

.pull-request-changelog__input-container {
	margin-top: 0.61em;
	padding-left: 6%;
	padding-right: 6%;
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
}

.pull-request-changelog__heading-container {
	text-align: center;
}

.pull-request-changelog__heading--first {
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
	margin-top: 0.61em;
	margin-bottom: 0.61em;
}

.changelog__container {
	font-size: 16px;
}

.pull-request-changelog__input {
	box-sizing: border-box;
	background-color: #f4f4f9;
	border: 0;
	border: 1px solid rgba(88, 111, 124, 0.5);
	color: #586f7c;
	font-family: 'Roboto';
	font-weight: 300;
	border-radius: 3px;
	font-size: 1em;
	width: 100%;
	padding-left: 6px;
	padding-right: 6px;
	padding-top: calc(0.61em / 2);
	padding-bottom: calc(0.61em / 2);

	&:focus {
		outline: none;
		box-shadow: 0 0 3px #b8dbd9;
	}
}
</style>
