import chromeStorage from './chromeStorage';

export default {
	UPDATE_TITLE(state, title) {
		state.title = title;
		chromeStorage.saveTitle({
			jiraIssue: state.jiraIssue,
			title,
		});
	},
	UPDATE_CHANGE_OPTIONS(state, payload) {
		state.options.change = payload;
		chromeStorage.saveChangeOptions({
			jiraIssue: state.jiraIssue,
			changeOptions: payload,
		});
	},
	UPDATE_BREAKING_OPTIONS(state, payload) {
		state.options.breaking = payload;
		chromeStorage.saveBreakingOptions({
			jiraIssue: state.jiraIssue,
			breakingOptions: payload,
		});
	},
	UPDATE_TESTING_OPTIONS(state, payload) {
		state.options.testing = payload;
		chromeStorage.saveTestingOptions({
			jiraIssue: state.jiraIssue,
			testingOptions: payload,
		});
	},
	UPDATE_MERGE_OPTIONS(state, payload) {
		state.options.merge = payload;
	},
	UPDATE_JIRA_ISSUE(state, payload) {
		state.jiraIssue = payload;
	},
	UPDATE_OTHER_INFORMATIONS(state, payload) {
		state.otherInformations = payload;
	},
	UPDATE_CHANGELOG(state, payload) {
		state.changelog.text = payload.text;
	},
};
