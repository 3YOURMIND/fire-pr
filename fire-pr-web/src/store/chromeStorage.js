const saveTitle = ({ jiraIssue, title }) => {
	chrome.storage.sync.set(
		{
			[`${jiraIssue}-title`]: title,
		},
		() => {},
	);
};

const saveChangeOptions = ({ jiraIssue, changeOptions }) => {
	chrome.storage.sync.set(
		{ [`${jiraIssue}-change-options`]: changeOptions },
		() => {},
	);
};

export default {
	saveTitle,
	saveChangeOptions,
};
