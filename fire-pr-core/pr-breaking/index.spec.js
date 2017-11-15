const PrBreakingModule = require('./index');

describe('Test pr-breaking', () => {
  it('Existing breaking change with description', () => {
    const payload = {
      exists: true,
      description: 'Lorem ipsum',
    };
    const expectedResult = `## Does this PR introduce a breaking change? ##

[✖] No
[✔] Yes: Lorem ipsum`;
    const result = PrBreakingModule.renderMarkdown(payload);
    expect(result).toBe(expectedResult);
  });
});
