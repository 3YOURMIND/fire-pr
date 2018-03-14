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

const saveMergeOptions = ({ jiraIssue, mergeOptions }) => {
	chrome.storage.sync.set({
		[`${jiraIssue}-merge-options`]: mergeOptions,
	});
};

const saveOtherInformations = ({ jiraIssue, otherInformations }) => {
	chrome.storage.sync.set({
		[`${jiraIssue}-other-informations`]: otherInformations,
	});
};

const saveChangelog = ({ jiraIssue, changelog }) => {
	chrome.storage.sync.set({
		[`${jiraIssue}-changelog`]: changelog,
	});
};

export default {
	saveTitle,
	saveChangeOptions,
	saveBreakingOptions,
	saveTestingOptions,
	saveMergeOptions,
	saveOtherInformations,
	saveChangelog,
};
