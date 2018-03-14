const saveTitle = ({ jiraIssue, title }) => {
	chrome.storage.sync.set({
		[`${jiraIssue}-title`]: title,
	});
};

const saveChangeOptions = ({ jiraIssue, changeOptions }) => {
	chrome.storage.sync.set({
		[`${jiraIssue}-change-options`]: changeOptions,
	});
};

const saveBreakingOptions = ({ jiraIssue, breakingOptions }) => {
	chrome.storage.sync.set({
		[`${jiraIssue}-breaking-options`]: breakingOptions,
	});
};

const saveTestingOptions = ({ jiraIssue, testingOptions }) => {
	chrome.storage.sync.set({
		[`${jiraIssue}-testing-options`]: testingOptions,
	});
};

export default {
	saveTitle,
	saveChangeOptions,
	saveBreakingOptions,
	saveTestingOptions,
};
