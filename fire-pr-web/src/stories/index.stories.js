import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Vue from 'vue';
import Vuex from 'vuex';
import StoryRouter from 'storybook-router';

import PullRequestTitle from '../views/PullRequestTitle.vue';
import PullRequestType from '../views/PullRequestType.vue';
import PullRequestBreaking from '../views/PullRequestBreaking.vue';
import TestingOptions from '../views/TestingOptions.vue';
import ReviewOptions from '../views/ReviewOptions.vue';
import OtherInformation from '../views/OtherInformation.vue';
import Changelog from '../views/Changelog.vue';

import NoBitbucketSiteStories from './NoBitbucketSite.story';

import '../../node_modules/purecss/build/pure.css';
import '../../node_modules/purecss/build/grids.css';
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
	.add('blank state', () => ({
		components: {
			PullRequestTitle,
		},
		store: new Vuex.Store({
			state: {
				title: '',
			},
		}),
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestTitle />
	</body>`,
	}))
	.add('predefined state', () => ({
		components: {
			PullRequestTitle,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestTitle />
	</body>`,
		store: new Vuex.Store({
			state: {
				title: 'fix(types): fix wrong errorCaptured type',
			},
			actions: {
				saveTitle: (context, payload) => {
					action('COMMIT TO STORE')(payload);
				},
			},
		}),
	}));

storiesOf('Pull Request Type', module)
	.addDecorator(StoryRouter())
	.add('initial state', () => ({
		components: {
			PullRequestType,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
			<PullRequestType />
		</body>`,
	}))
	.add('predefined state without description', () => ({
		components: {
			PullRequestType,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
			<PullRequestType />
		</body>`,
		store: new Vuex.Store({
			state: {
				options: {
					change: {
						bugfix: true,
					},
				},
			},
			actions: {
				saveChangeOptions: (context, payload) => {
					action('COMMIT TO STORE')(payload);
				},
			},
		}),
	}))
	.add('predefined state with description', () => ({
		components: {
			PullRequestType,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
			<PullRequestType />
		</body>`,
		store: new Vuex.Store({
			state: {
				options: {
					change: {
						bugfix: true,
						other: true,
						otherDescription: 'Documentation comment grammar fix',
					},
				},
			},
			actions: {
				saveChangeOptions: (context, payload) => {
					action('COMMIT TO STORE')(payload);
				},
			},
		}),
	}));

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

storiesOf('Pull Request Review Options', module).add('initial state', () => ({
	components: {
		ReviewOptions,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
		<ReviewOptions />
	</body>`,
}));

storiesOf('Pull Request Other Information', module).add(
	'initial state',
	() => ({
		components: {
			OtherInformation,
		},
		template: `<body style="${DEFAULT_BODY_STYLE}">
		<OtherInformation />
	</body>`,
	}),
);

storiesOf('Pull Request Changelog', module).add('initial state', () => ({
	components: {
		Changelog,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
		<Changelog />
	</body>`,
}));

// Create pull request
