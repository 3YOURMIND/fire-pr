const renderMarkdown = ({ heading, issueNumber }) => {
	return issueNumber ? `${heading} [${issueNumber}]` : heading;
};

export default {
	renderMarkdown,
};
