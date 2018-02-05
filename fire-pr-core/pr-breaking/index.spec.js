import PrBreakingModule from './index';

describe('Test pr-breaking', () => {
  it('Breaking change with description', () => {
    const payload = {
      exists: true,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    };
    const expectedResult = `## Does this PR introduce a breaking change? ##

[✖] No
[✔] Yes: Lorem Ipsum is simply dummy text of the printing and typesetting industry`;
    const result = PrBreakingModule.renderMarkdown(payload);
    expect(result).toBe(expectedResult);
  });

  it('Breaking change without description', () => {
    const payload = {
      exists: true,
      description: null,
    };
    expect(() => {
      PrBreakingModule.renderMarkdown(payload);
    }).toThrow();
  });

  it('Non-breaking change without description', () => {
    const payload = {
      exists: false,
      description: null,
    };
    const expectedResult = `## Does this PR introduce a breaking change? ##

[✔] No
[✖] Yes`;
    expect(PrBreakingModule.renderMarkdown(payload)).toBe(expectedResult);
  });

  it('Non-breaking change with description', () => {
    const payload = {
      exists: false,
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
    };
    const expectedResult = `## Does this PR introduce a breaking change? ##

[✔] No
[✖] Yes`;
    expect(PrBreakingModule.renderMarkdown(payload)).toBe(expectedResult);
  });
});
