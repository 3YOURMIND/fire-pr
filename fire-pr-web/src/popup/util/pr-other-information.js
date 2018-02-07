const renderMarkdown = otherInformation => {
	const headline = `## Other information ##

`;
	if (otherInformation.length === 0) {
		return `${headline}*No other information provided*`;
	}
	const otherInformationListRepresentation = otherInformation.map(
		otherInformationElement => {
			return `- ${otherInformationElement}`;
		},
	);
	return `${headline}${otherInformationListRepresentation.join('\n')}`;
};

export default {
	renderMarkdown,
};
