import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import PullRequestBreaking from '../views/PullRequestBreaking.vue';

Vue.use(Vuex);

const DEFAULT_BODY_STYLE =
	'width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;';

const initialState = () => ({
	components: {
		PullRequestBreaking,
	},
	store: new Vuex.Store({
		state: {
			options: {
				breaking: {
					breaking: false,
					text: null,
				},
			},
		},
		actions: {
			saveBreakingOptions: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
	template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestBreaking />
	</body>`,
});

const predefinedState = () => ({
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
});

export default {
	initialState,
	predefinedState,
};
