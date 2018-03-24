import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Vue from 'vue';
import Vuex from 'vuex';
import StoryRouter from 'storybook-router';

import PullRequestType from '../views/PullRequestType.vue';
import PullRequestBreaking from '../views/PullRequestBreaking.vue';
import TestingOptions from '../views/TestingOptions.vue';
import ReviewOptions from '../views/ReviewOptions.vue';
import PullRequestOtherInformation from '../views/PullRequestOtherInformation.vue';
import PullRequestChangelog from '../views/PullRequestChangelog.vue';

import NoBitbucketSiteStories from './NoBitbucketSite.story';
import PullRequestTitleStories from './PullRequestTitle.story';
import PullRequestTypeStories from './PullRequestType.story';

import '../../../node_modules/purecss/build/pure.css';
import '../../../node_modules/purecss/build/grids.css';
import '../assets/css/fonts.css';

Vue.use(Vuex);

const DEFAULT_BODY_STYLE =
	'width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;';

storiesOf('No Bitbucket site', module).add(
	'initial state',
	NoBitbucketSiteStories.initialState,
);

storiesOf('Pull Request Title', module)
	.addDecorator(StoryRouter())
	.add('blank state', PullRequestTitleStories.initialState)
	.add('predefined state', PullRequestTitleStories.predefinedState);

storiesOf('Pull Request Type', module)
	.addDecorator(StoryRouter())
	.add('initial state', PullRequestTypeStories.initialState)
	.add(
		'predefined state without description',
		PullRequestTypeStories.predefinedStateWithoutDescription,
	)
	.add(
		'predefined state with description',
		PullRequestTypeStories.predefinedStateWitDescription,
	);

storiesOf('Pull Request Breaking Changes', module)
	.addDecorator(StoryRouter())
	.add('initial state', () => ({
		components: {
			PullRequestBreaking,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestBreaking />
	</body>`,
	}))
	.add('predefined state', () => ({
		components: {
			PullRequestBreaking,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestBreaking />
	</body>`,
		store: new Vuex.Store({
			state: {
				options: {
					breaking: {
						breaking: true,
						text: 'New dependency which will break a lot of stuff',
					},
				},
			},
			actions: {
				saveBreakingOptions: (context, payload) => {
					action('COMMIT TO STORE')(payload);
				},
			},
		}),
	}));

storiesOf('Pull Request Testing Options', module)
	.addDecorator(StoryRouter())
	.add('initial state', () => ({
		components: {
			TestingOptions,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<TestingOptions />
	</body>`,
	}))
	.add('one test case - multiple steps', () => ({
		components: {
			TestingOptions,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<TestingOptions />
	</body>`,
		store: new Vuex.Store({
			state: {
				options: {
					testing: [['Test Scenario', 'Test Steps', 'Parameters']],
				},
			},
			actions: {
				saveTestingOptions: (context, payload) => {
					action('COMMIT TO STORE')(payload);
				},
			},
		}),
	}))
	.add('multiple test cases - multiple steps', () => ({
		components: {
			TestingOptions,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<TestingOptions />
	</body>`,
		store: new Vuex.Store({
			state: {
				options: {
					testing: [
						['Test Scenario', 'Test Steps', 'Parameters'],
						['Test Scenario'],
						[
							'Multiline is lorem ipsum hic forum est lorem ipsum hic forum est',
						],
					],
				},
			},
			actions: {
				saveTestingOptions: (context, payload) => {
					action('COMMIT TO STORE')(payload);
				},
			},
		}),
	}));

storiesOf('Pull Request Review Options', module)
	.add('initial state', () => ({
		components: {
			ReviewOptions,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<ReviewOptions />
	</body>`,
	}))
	.add('predefined state', () => ({
		components: {
			ReviewOptions,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<ReviewOptions />
	</body>`,
		store: new Vuex.Store({
			state: {
				options: {
					merge: {
						merger: 'last',
						mergeTime: 'all',
					},
				},
			},
			actions: {
				saveMergeOptions: (context, payload) => {
					action('COMMIT TO STORE')(payload);
				},
			},
		}),
	}));

storiesOf('Pull Request Other Information', module)
	.add('initial state', () => ({
		components: {
			PullRequestOtherInformation,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestOtherInformation />
	</body>`,
	}))
	.add('predefined state', () => ({
		components: {
			PullRequestOtherInformation,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestOtherInformation />
	</body>`,
		store: new Vuex.Store({
			state: {
				otherInformations: [
					"I'm developing some editor extension which can highlight styles",
					'I have no idea why the template option is not padded',
				],
			},
			actions: {
				saveOtherInformations: (context, payload) => {
					action('COMMIT TO STORE')(payload);
				},
			},
		}),
	}));

storiesOf('Pull Request Changelog', module)
	.add('initial state', () => ({
		components: {
			PullRequestChangelog,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestChangelog />
	</body>`,
	}))
	.add('predefined state', () => ({
		components: {
			PullRequestChangelog,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
	<PullRequestChangelog />
</body>`,
		store: new Vuex.Store({
			state: {
				changelog: {
					text: 'ref: allow ref key to be zero',
				},
			},
			actions: {
				saveChangelog: (context, payload) => {
					action('COMMIT TO STORE')(payload);
				},
			},
		}),
	}));
