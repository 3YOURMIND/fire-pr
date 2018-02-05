import PrTitle from './index';

describe('Module pr-title', () => {
  it('Test default payload', () => {
    const changelogPayload = {
      heading: 'Fix project behavior',
      issueNumber: 'MO-3051',
    };
    const markdown = PrTitle.renderMarkdown(changelogPayload);
    const expectedMarkdown = 'Fix project behavior [MO-3051]';
    expect(markdown).toBe(expectedMarkdown);
  });
});
