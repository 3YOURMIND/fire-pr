import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import PullRequestTitle from '../views/PullRequestTitle.vue';

Vue.use(Vuex);

const DEFAULT_BODY_STYLE =
	'width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;';

const initialState = () => ({
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
});

const predefinedState = () => ({
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
});

export default {
	initialState,
	predefinedState,
};
