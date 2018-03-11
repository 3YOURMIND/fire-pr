const saveTitle = ({ jiraIssue, title }) => {
	chrome.storage.sync.set(
		{
			[`${jiraIssue}-title`]: title,
		},
		() => {},
	);
};

export default {
	saveTitle,
};
