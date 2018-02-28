import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import Vue from 'vue';
import Vuex from 'vuex';
import StoryRouter from 'storybook-router';

import PullRequestTitle from '../views/PullRequestTitle.vue';
import TheNoBitbucketSite from '../components/TheNoBitbucketSite.vue';
import PullRequestType from '../views/PullRequestType.vue';
import PullRequestBreaking from '../views/PullRequestBreaking.vue';
import TestingOptions from '../views/TestingOptions.vue';
import ReviewOptions from '../views/ReviewOptions.vue';
import OtherInformation from '../views/OtherInformation.vue';
import Changelog from '../views/Changelog.vue';

import '../../node_modules/purecss/build/pure.css';
import '../../node_modules/purecss/build/grids.css';
import '../assets/css/fonts.css';

Vue.use(Vuex);

const DEFAULT_BODY_STYLE =
	'width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;';

storiesOf('No Bitbucket site', module).add('initial state', () => ({
	components: {
		TheNoBitbucketSite,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
			<TheNoBitbucketSite />
		</body>`,
}));

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
				saveTitle: context => {
					action('COMMIT TO STORE')(context.state.title);
				},
			},
		}),
	}));

storiesOf('Pull Request Type', module).add('initial state', () => ({
	components: {
		PullRequestType,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
			<PullRequestType />
		</body>`,
}));

storiesOf('Pull Request Breaking Changes', module).add('initial state', () => ({
	components: {
		PullRequestBreaking,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestBreaking />
	</body>`,
}));

storiesOf('Pull Request Testing Options', module).add('initial state', () => ({
	components: {
		TestingOptions,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
		<TestingOptions />
	</body>`,
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
