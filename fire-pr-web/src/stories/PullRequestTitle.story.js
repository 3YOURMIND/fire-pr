import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import PullRequestTitle from '../views/PullRequestTitle.vue';
import defaultBodyStyle from './DefaultBodyStyle';

Vue.use(Vuex);

const initialState = () => ({
	components: {
		PullRequestTitle,
	},
	store: new Vuex.Store({
		state: {
			title: '',
		},
		actions: {
			saveTitle: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
	template: `<body style="${defaultBodyStyle}">
	<PullRequestTitle />
</body>`,
});

const predefinedState = () => ({
	components: {
		PullRequestTitle,
	},
	template: `<body style="${defaultBodyStyle}">
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
