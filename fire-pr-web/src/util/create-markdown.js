import PrTypeUtility from '../../../fire-pr-core/pr-type';
import PrBreakingUtility from '../../../fire-pr-core/pr-breaking';
import PrTestingUtility from '../../../fire-pr-core/pr-testing-procedure';
import PrMergerUtility from '../../../fire-pr-core/pr-merger';
import PrOtherInformationUtility from '../../../fire-pr-core/pr-other-information';
import PrChangelogUtility from '../../../fire-pr-core/pr-changelog';

const createTypeMarkdown = state => {
	const options = state.options.change;
	PrTypeUtility.initialize([
		{
			checked: options.bugfix,
			label: 'Bugfix',
			description: {
				enabled: false,
				prefix: null,
			},
		},
		{
			checked: options.feature,
			label: 'Feature',
			description: {
				enabled: false,
				prefix: null,
			},
		},
		{
			checked: options.codeStyle,
			label: 'Code style update',
			description: {
				enabled: false,
				prefix: null,
			},
		},
		{
			checked: options.refactor,
			label: 'Refactor',
			description: {
				enabled: false,
				prefix: null,
			},
		},
		{
			checked: options.build,
			label: 'Build-related changes',
			description: {
				enabled: false,
				prefix: null,
			},
		},
		{
			checked: options.other,
			label: 'Other',
			description: {
				enabled: true,
				prefix: ', please describe',
			},
		},
	]);
	const typePayload = {};
	if (options.other) {
		typePayload.Other = options.otherDescription;
	}
	return PrTypeUtility.renderMarkdown(typePayload);
};

const createBreakingChangeMarkdown = state => {
	const { breaking, text } = state.options.breaking;
	const breakingChangePayload = {
		exists: breaking,
		description: text,
	};
	return PrBreakingUtility.renderMarkdown(breakingChangePayload);
};

const createTestingMarkdown = state => {
	const testSteps = state.options.testing;
	return PrTestingUtility.renderMarkdown(testSteps);
};

const createMergerMarkdown = state => {
	const storeMerge = state.options.merge;
	const payload = {
		merger: storeMerge.merger,
		mergeTime: storeMerge.mergeTime,
	};
	return PrMergerUtility.renderMarkdown(payload);
};

const createOtherInformationMarkdown = state => {
	return PrOtherInformationUtility.renderMarkdown(state.otherInformations);
};

const createChangelogMarkdown = state => {
	let issueNumber = null;
	let projectAbbreviation = null;
	try {
		const splittedIssues = state.jiraIssue.split('-');
		issueNumber = splittedIssues[1];
		projectAbbreviation = splittedIssues[0];
	} catch (error) {}
	return PrChangelogUtility.renderMarkdown({
		note: {
			description: state.changelog.text,
			issueNumber,
			baseUrl: 'https://jira.3yourmind.com',
			projectAbbreviation,
		},
		pictures: [],
	});
};

const render = state => {
	const splitter = '\n\n---\n\n';
	const typeMarkdown = createTypeMarkdown(state);
	const breakingMarkdown = createBreakingChangeMarkdown(state);
	const testingMarkdown = createTestingMarkdown(state);
	const mergerMarkdown = createMergerMarkdown(state);
	const otherInformationMarkdown = createOtherInformationMarkdown(state);
	const changelogMarkdown = createChangelogMarkdown(state);
	return `${typeMarkdown}${splitter}${breakingMarkdown}${splitter}${testingMarkdown}${splitter}${mergerMarkdown}${splitter}${otherInformationMarkdown}${splitter}${changelogMarkdown}`;
};

export default {
	render,
};
