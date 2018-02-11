/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PullRequestTitle from '../views/PullRequestTitle.vue';
import TheNoBitbucketSite from '../components/TheNoBitbucketSite.vue';

import '../../node_modules/purecss/build/pure.css';
import '../../node_modules/purecss/build/grids.css';
import '../assets/css/fonts.css';

storiesOf('PullRequestTitle', module).add('initial state', () => ({
	components: {
		PullRequestTitle,
	},
	template: `<body style="width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;">
			<PullRequestTitle />
		</body>`,
}));

storiesOf('No Bitbucket site', module).add('initial state', () => ({
	components: {
		TheNoBitbucketSite,
	},
	template: `<body style="width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;">
			<TheNoBitbucketSite />
		</body>`,
}));

/* eslint-enable react/react-in-jsx-scope */
