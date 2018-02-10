/* eslint-disable react/react-in-jsx-scope */

import { storiesOf } from '@storybook/vue';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import PullRequestTitle from '../views/PullRequestTitle.vue';

storiesOf('PullRequestTitle', module)
	.add('initial state', () => ({
		components: { PullRequestTitle },
		template: `<div style="width: 375px; height: 580px; background-color: #F4F4F9;">
			<PullRequestTitle />
		</div>`,
	}))
	.add('with text', () => ({
		components: { PullRequestTitle },
		template: `<div style="width: 375px; height: 580px; background-color: #F4F4F9;">
			<PullRequestTitle :title="'fix(compiler): update weex recycle-list compiler'" />
		</div>`,
	}));

/* eslint-enable react/react-in-jsx-scope */
