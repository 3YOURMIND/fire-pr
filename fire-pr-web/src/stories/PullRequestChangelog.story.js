import Vue from 'vue';
import Vuex from 'vuex';
import PullRequestChangelog from '../views/PullRequestChangelog.vue';

Vue.use(Vuex);

const DEFAULT_BODY_STYLE =
	'width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;';

const initialState = () => ({
	components: {
		PullRequestChangelog,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
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
	template: `<body style="${DEFAULT_BODY_STYLE}">
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
