const validatePayload = payload => {
	if (!payload.note) {
		return new Error('A note must be provided');
	}
	const payloadNote = payload.note;
	if (!('description' in payloadNote)) {
		return new Error('A description for the changelog note must be provided.');
	}
	return true;
};

const renderMarkdown = changelogPayload => {
	const validationResponse = validatePayload(changelogPayload);
	if (validationResponse instanceof Error) {
		return validationResponse;
	}
	const headline = '## Changelog ##\n\n';
	let closingMessage = '';
	if (
		changelogPayload.note.baseUrl &&
		changelogPayload.note.projectAbbreviation &&
		changelogPayload.note.issueNumber
	) {
		closingMessage = `, closes [#${changelogPayload.note.issueNumber}](${
			changelogPayload.note.baseUrl
		}/browse/${changelogPayload.note.projectAbbreviation}-${
			changelogPayload.note.issueNumber
		})`;
	}

	const note = `**Note**

- ${changelogPayload.note.description.replace('`', '`')}${closingMessage}`;
	let pictures = '';
	if (changelogPayload.pictures && changelogPayload.pictures.length > 0) {
		const mappedPictureList = changelogPayload.pictures.map(picture => {
			return `- ![](${picture})`;
		}).join(`
`);
		pictures = `

**Pictures**

${mappedPictureList}`;
	}

	return `${headline}${note}${pictures}`;
};

export default {
	renderMarkdown,
};
