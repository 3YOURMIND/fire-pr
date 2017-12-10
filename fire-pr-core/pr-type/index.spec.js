const PrType = require('./index');

describe('Module pr-type', () => {
  it('Test prefix configuration', () => {
    const prTypeConfiguration = [
      {
        checked: false,
        label: 'Bugfix',
        description: {
          enabled: false,
          prefix: null,
        },
      },
      {
        checked: true,
        label: 'Other',
        description: {
          enabled: true,
          prefix: ', please describe',
        },
      },
    ];
    PrType.initialize(prTypeConfiguration);
    const descriptions = {
      Other: 'This is lorem ipsum.',
    };
    const markdown = PrType.renderMarkdown(descriptions);
    const expectedMarkdown = `## What kind of change does this PR introduce? ##

* [✖] Bugfix
* [✔] Other, please describe: This is lorem ipsum.`;
    expect(markdown).toBe(expectedMarkdown);
  });

  it('Test non-prefix configuration', () => {
    const prTypeConfiguration = [
      {
        checked: true,
        label: 'Bugfix',
        description: {
          enabled: false,
          prefix: null,
        },
      },
      {
        checked: false,
        label: 'Other',
        description: {
          enabled: false,
          prefix: null,
        },
      },
    ];
    PrType.initialize(prTypeConfiguration);
    const markdown = PrType.renderMarkdown(null);
    const expectedMarkdown = `## What kind of change does this PR introduce? ##

* [✔] Bugfix
* [✖] Other`;
    expect(markdown).toBe(expectedMarkdown);
  });

  it('Test multiple with prefix configuration', () => {
    const prTypeConfiguration = [
      {
        checked: true,
        label: 'Bugfix',
        description: {
          enabled: false,
          prefix: null,
        },
      },
      {
        checked: true,
        label: 'Other',
        description: {
          enabled: true,
          prefix: ', please describe',
        },
      },
    ];
    const descriptions = {
      Other: 'This is lorem ipsum.',
    };
    PrType.initialize(prTypeConfiguration);
    const markdown = PrType.renderMarkdown(descriptions);
    const expectedMarkdown = `## What kind of change does this PR introduce? ##

* [✔] Bugfix
* [✔] Other, please describe: This is lorem ipsum.`;
    expect(markdown).toBe(expectedMarkdown);
  });
});
