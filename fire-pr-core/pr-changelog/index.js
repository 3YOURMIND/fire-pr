const validatePayload = payload => {
  if (!payload.note) {
    return new Error('A note must be provided');
  }
  const payloadNote = payload.note;
  if (!('description' in payloadNote)) {
    return new Error('A description for the changelog note must be provided.');
  }
  if (!('issueNumber' in payloadNote)) {
    return new Error(
      'A issue number must be provided to create the changelog note.',
    );
  }
  if (!('projectAbbreviation' in payloadNote)) {
    return new Error(
      'A project abbreviation must be provided to create the changelog note.',
    );
  }
  if (!('baseUrl' in payloadNote)) {
    return new Error('A base url nmust be provided to create the changelog.');
  }
  return true;
};

const renderMarkdown = changelogPayload => {
  const validationResponse = validatePayload(changelogPayload);
  if (validationResponse instanceof Error) {
    return validationResponse;
  }
  const headline = '## Changelog ##\n\n';

  const note = `### Note ###

- ${changelogPayload.note.description}, closes [#${changelogPayload.note
    .issueNumber}](${changelogPayload.note.baseUrl}/browse/${changelogPayload
    .note.projectAbbreviation}-${changelogPayload.note.issueNumber})`;
  let pictures = '';
  if (changelogPayload.pictures && changelogPayload.pictures.length > 0) {
    const mappedPictureList = changelogPayload.pictures.map(picture => {
      return `- ![](${picture})`;
    }).join(`
`);
    pictures = `

### Pictures ###

${mappedPictureList}`;
  }

  return `${headline}${note}${pictures}`;
};

module.exports = {
  renderMarkdown,
};
