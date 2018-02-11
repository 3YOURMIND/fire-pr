import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

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

storiesOf('No Bitbucket site', module).add('initial state', () => ({
	components: {
		TheNoBitbucketSite,
	},
	template: `<body style="width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;">
			<TheNoBitbucketSite />
		</body>`,
}));

storiesOf('Pull Request Title', module).add('initial state', () => ({
	components: {
		PullRequestTitle,
	},
	template: `<body style="width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;">
			<PullRequestTitle />
		</body>`,
}));

storiesOf('Pull Request Type', module).add('initial state', () => ({
	components: {
		PullRequestType,
	},
	template: `<body style="width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;">
			<PullRequestType />
		</body>`,
}));

storiesOf('Pull Request Breaking Changes', module).add('initial state', () => ({
	components: {
		PullRequestBreaking,
	},
	template: `<body style="width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;">
		<PullRequestBreaking />
	</body>`,
}));

storiesOf('Pull Request Testing Options', module).add('initial state', () => ({
	components: {
		TestingOptions,
	},
	template: `<body style="width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;">
		<TestingOptions />
	</body>`,
}));

storiesOf('Pull Request Review Options', module).add('initial state', () => ({
	components: {
		ReviewOptions,
	},
	template: `<body style="width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;">
		<ReviewOptions />
	</body>`,
}));

storiesOf('Pull Request Other Information', module).add(
	'initial state',
	() => ({
		components: {
			OtherInformation,
		},
		template: `<body style="width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;">
		<OtherInformation />
	</body>`,
	}),
);

storiesOf('Pull Request Changelog', module).add('initial state', () => ({
	components: {
		Changelog,
	},
	template: `<body style="width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;">
		<Changelog />
	</body>`,
}));

// Create pull request
