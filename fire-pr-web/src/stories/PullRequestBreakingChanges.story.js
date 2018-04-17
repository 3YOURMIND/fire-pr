import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import PullRequestBreaking from '../views/PullRequestBreaking.vue';
import defaultBodyStyle from './DefaultBodyStyle';

Vue.use(Vuex);

const createStore = ({ breaking = false, text = null }) =>
	new Vuex.Store({
		state: {
			options: {
				breaking: {
					breaking,
					text,
				},
			},
		},
		actions: {
			saveBreakingOptions: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	});

const initialState = () => ({
	components: {
		PullRequestBreaking,
	},
	store: createStore({}),
	template: `<body style="${defaultBodyStyle}">
		<PullRequestBreaking />
	</body>`,
});

const predefinedState = () => ({
	components: {
		PullRequestBreaking,
	},
	template: `<body style="${defaultBodyStyle}">
	<PullRequestBreaking />
</body>`,
	store: createStore({
		breaking: true,
		text: 'New dependency which will break a lot of stuff',
	}),
});

export default {
	initialState,
	predefinedState,
};
