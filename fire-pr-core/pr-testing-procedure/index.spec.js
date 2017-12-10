const PrTestingProcedure = require('./index');

describe('Module pr-testing-procedure', () => {
  it('Test single test case, single instruction', () => {
    const changelogPayload = [['first instruction']];
    const markdown = PrTestingProcedure.renderMarkdown(changelogPayload);
    const expectedMarkdown = `## Testing procedure ##

**Case 1**

1. first instruction`;
    expect(markdown).toBe(expectedMarkdown);
  });

  it('Test single test case, multiple instruction', () => {
    const changelogPayload = [
      ['first instruction', 'second instruction', 'third instruction'],
    ];
    const markdown = PrTestingProcedure.renderMarkdown(changelogPayload);
    const expectedMarkdown = `## Testing procedure ##

**Case 1**

1. first instruction
2. second instruction
3. third instruction`;
    expect(markdown).toBe(expectedMarkdown);
  });

  it('Test multiple test cases, singe instruction', () => {
    const changelogPayload = [['first test case'], ['second test case']];
    const markdown = PrTestingProcedure.renderMarkdown(changelogPayload);
    const expectedMarkdown = `## Testing procedure ##

**Case 1**

1. first test case

**Case 2**

1. second test case`;
    expect(markdown).toBe(expectedMarkdown);
  });

  it('Test multiple test cases, multiple instructions', () => {
    const changelogPayload = [
      [
        'first test case - first instruction',
        'first test case - second instruction',
      ],
      [
        'second test case - first instruction',
        'second test case - second instruction',
      ],
    ];
    const markdown = PrTestingProcedure.renderMarkdown(changelogPayload);
    const expectedMarkdown = `## Testing procedure ##

**Case 1**

1. first test case - first instruction
2. first test case - second instruction

**Case 2**

1. second test case - first instruction
2. second test case - second instruction`;
    expect(markdown).toBe(expectedMarkdown);
  });

  it('Test empty payload', () => {
    const changelogPayload = [];
    const markdown = PrTestingProcedure.renderMarkdown(changelogPayload);
    const expectedMarkdown = `## Testing procedure ##

*No test cases provided*`;
    expect(markdown).toBe(expectedMarkdown);
  });
});
