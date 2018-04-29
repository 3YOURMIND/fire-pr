import PrOtherInformation from './index';

describe('Module pr-other-information', () => {
	it('Test default payload', () => {
		const changelogPayload = ['first line', 'second line'];
		const markdown = PrOtherInformation.renderMarkdown(changelogPayload);
		const expectedMarkdown = `## Other information ##

- first line
- second line`;
		expect(markdown).toBe(expectedMarkdown);
	});

	it('Test empty payload', () => {
		const changelogPayload = [];
		const markdown = PrOtherInformation.renderMarkdown(changelogPayload);
		const expectedMarkdown = `## Other information ##

*No other information provided*`;
		expect(markdown).toBe(expectedMarkdown);
	});

	it('Test other information with backtick', () => {
		const changelogPayload = ['first line', 'second line'];
		const markdown = PrOtherInformation.renderMarkdown(changelogPayload);
		const expectedMarkdown = `## Other information ##

- first line
- second line`;
		expect(markdown).toBe(expectedMarkdown);
	});

	it("should render backtick's properly", () => {
		const changelogPayload = ['this should look like `test`.', 'second line'];
		const markdown = PrOtherInformation.renderMarkdown(changelogPayload);
		const expectedMarkdown = `## Other information ##

- this should look like \`test\`.
- second line`;
		expect(markdown).toBe(expectedMarkdown);
	});
});
