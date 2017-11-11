let defaultConfiguration = null;

const initialize = (configuration) => {
  defaultConfiguration = configuration;
};

const renderMarkdown = (descriptions) => {
  const heading = '## What kind of change does this PR introduce? ##';
  if (defaultConfiguration === null) {
    return heading;
  }
  let markdown = `${heading}` + '\n\n';
  defaultConfiguration.forEach((entry) => {
    const checkedIcon = entry.checked ? '✔' : '✖';
    markdown += `* [${checkedIcon}] ${entry.label}` + '\n';
  });
  return markdown;
};

module.exports = {
  initialize,
  renderMarkdown,
};
