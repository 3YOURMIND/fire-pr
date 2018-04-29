const renderMarkdown = ({ heading, issueNumber }) => {
	const normalizedHeading = heading.replace('`', '`');
	return issueNumber
		? `${normalizedHeading} [${issueNumber}]`
		: normalizedHeading;
};

export default {
	renderMarkdown,
};
