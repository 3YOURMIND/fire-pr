export default {
	UPDATE_TITLE(state, payload) {
		state.title = payload;
	},
	UPDATE_CHANGE_OPTIONS(state, payload) {
		state.options.change = payload;
	},
	UPDATE_BREAKING_OPTIONS(state, payload) {
		state.options.breaking = payload;
	},
	UPDATE_TESTING_OPTIONS(state, payload) {
		state.options.testing = payload;
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
