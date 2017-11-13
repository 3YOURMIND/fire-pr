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
  const types = [];
  defaultConfiguration.forEach((entry) => {
    const checkedIcon = entry.checked ? '✔' : '✖';
    let typeMarkdown = '';
    typeMarkdown += `* [${checkedIcon}] ${entry.label}`;
    if (entry.description.enabled) {
      if (entry.description.prefix) {
        typeMarkdown += entry.description.prefix;
      }
      if (entry.label in descriptions) {
        typeMarkdown += `: ${descriptions[entry.label]}`;
      }
    }
    types.push(typeMarkdown);
  });
  markdown += types.join('\n');
  return markdown;
};

module.exports = {
  initialize,
  renderMarkdown,
};
