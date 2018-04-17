import Vue from 'vue';
import Vuex from 'vuex';
import PullRequestChangelog from '../views/PullRequestChangelog.vue';
import defaultBodyStyle from './DefaultBodyStyle';

Vue.use(Vuex);

const initialState = () => ({
	components: {
		PullRequestChangelog,
	},
	template: `<body style="${defaultBodyStyle}">
	<PullRequestChangelog />
</body>`,
	store: new Vuex.Store({
		state: {
			changelog: {
				text: '',
			},
		},
		actions: {
			saveChangelog: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

const predefinedState = () => ({
	components: {
		PullRequestChangelog,
	},
	template: `<body style="${defaultBodyStyle}">
<PullRequestChangelog />
</body>`,
	store: new Vuex.Store({
		state: {
			changelog: {
				text: 'ref: allow ref key to be zero',
			},
		},
		actions: {
			saveChangelog: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

export default {
	initialState,
	predefinedState,
};
