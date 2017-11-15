const renderMarkdown = (configuration) => {
  let result = '## Does this PR introduce a breaking change? ##\n\n';
  if (!configuration.exists) {
    result += '[✔] No\n';
    result += '[✖] Yes';
  }
  if (configuration.exists) {
    result += '[✖] No\n';
    if (!configuration.description) {
      throw new Error('If there is a breaking change a description for this error should be provided.');
    }
    result += `[✔] Yes: ${configuration.description}`;
  }
  return result;
};

module.exports = {
  renderMarkdown,
};
