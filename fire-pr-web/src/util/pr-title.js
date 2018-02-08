const renderMarkdown = payload => {
	return `${payload.heading} [${payload.issueNumber}]`;
};

export default {
	renderMarkdown,
};
