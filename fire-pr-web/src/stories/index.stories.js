import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Vue from 'vue';
import Vuex from 'vuex';
import StoryRouter from 'storybook-router';

import PullRequestType from '../views/PullRequestType.vue';
import ReviewOptions from '../views/ReviewOptions.vue';
import PullRequestOtherInformation from '../views/PullRequestOtherInformation.vue';
import PullRequestChangelog from '../views/PullRequestChangelog.vue';

import NoBitbucketSiteStories from './NoBitbucketSite.story';
import PullRequestTitleStories from './PullRequestTitle.story';
import PullRequestTypeStories from './PullRequestType.story';
import PullRequestBreakingStories from './PullRequestBreakingChanges.story';
import PullRequestTestingOptions from './PullRequestTestingOptions.story';

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
	.add('initial state', PullRequestBreakingStories.initialState)
	.add('predefined state', PullRequestBreakingStories.predefinedState);

storiesOf('Pull Request Testing Options', module)
	.addDecorator(StoryRouter())
	.add('initial state', PullRequestTestingOptions.initialState)
	.add(
		'one test case - multiple steps',
		PullRequestTestingOptions.oneTestCaseMultipleSteps,
	)
	.add(
		'multiple test cases - multiple steps',
		PullRequestTestingOptions.multipleTestCasesMultipleSteps,
	);

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
