const PrChangelogModule = require('./index');

describe('Test pr-changelog', () => {
  it('Change default payload', () => {
    const changelogPayload = {
      note: {
        description: 'Lorem ipsum',
        issueNumber: 3059,
        baseUrl: 'https://testOrganization.atlassian.net',
        projectAbbreviation: 'B3',
      },
      pictures: [
        'http://via.placeholder.com/325x150',
        'http://via.placeholder.com/325x150',
      ],
    };
    const markdown = PrChangelogModule.renderMarkdown(changelogPayload);
    const expectedMarkdown = `## Changelog ##

### Note ###

- Lorem ipsum, closes [#3059](https://testOrganization.atlassian.net/browse/B3-3059)

### Pictures ###

- ![](http://via.placeholder.com/325x150)
- ![](http://via.placeholder.com/325x150)`;
    expect(markdown).toBe(expectedMarkdown);
  });
});
