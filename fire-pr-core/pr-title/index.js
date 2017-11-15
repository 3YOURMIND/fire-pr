const renderMarkdown = payload => {
  return `${payload.heading} [${payload.issueNumber}]`;
};

module.exports = {
  renderMarkdown,
};
