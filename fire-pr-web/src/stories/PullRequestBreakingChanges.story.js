import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import PullRequestBreaking from '../views/PullRequestBreaking.vue';

Vue.use(Vuex);

const DEFAULT_BODY_STYLE =
	'width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;';

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
	store: createStore({
		breaking: true,
		text: 'New dependency which will break a lot of stuff',
	}),
});

export default {
	initialState,
	predefinedState,
};
