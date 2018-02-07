const renderMarkdown = configuration => {
	const headline = `## Review and Merge ##

`;
	const lastApproverMergesSymbol = configuration.merger === 'last' ? '✔' : '✖';
	const pullRequestCreatorSymbol =
		configuration.merger === 'creator' ? '✔' : '✖';
	const whoMarkdown = `**Who**

* [${lastApproverMergesSymbol}] Last approver merges
* [${pullRequestCreatorSymbol}] Pull request creator merges

`;
	const halfSymbol = configuration.mergeTime === 'half' ? '✔' : '✖';
	const allSymbol = configuration.mergeTime === 'all' ? '✔' : '✖';
	const oneSymbol = configuration.mergeTime === 'one' ? '✔' : '✖';
	const whenMarkdown = `**When**

* [${halfSymbol}] Merge after > 51% of the reviewers approved
* [${allSymbol}] Merge after 100%  of the reviewers approved
* [${oneSymbol}] Merge after one reviewer approved`;
	return `${headline}${whoMarkdown}${whenMarkdown}`;
};

export default {
	renderMarkdown,
};
