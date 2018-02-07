const renderMarkdown = testCases => {
	const headline = `## Testing procedure ##

`;
	if (testCases.length === 0) {
		return `${headline}*No test cases provided*`;
	}

	const resultI = testCases.map((testCaseInstructions, index) => {
		const instructionList = testCaseInstructions.map(
			(testCaseInstruction, index) => {
				return `${index + 1}. ${testCaseInstruction}`;
			},
		);
		const instructionListRepresentation = instructionList.join(`
`);
		return `**Case ${index + 1}**

${instructionListRepresentation}`;
	});
	const test = resultI.join(`

`);
	return `${headline}${test}`;
};

export default {
	renderMarkdown,
};
