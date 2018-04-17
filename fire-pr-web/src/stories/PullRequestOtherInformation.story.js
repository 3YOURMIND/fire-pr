import Vue from 'vue';
import Vuex from 'vuex';
import PullRequestOtherInformation from '../views/PullRequestOtherInformation.vue';
import defaultBodyStyle from './DefaultBodyStyle';

Vue.use(Vuex);

const initialState = () => ({
	components: {
		PullRequestOtherInformation,
	},
	template: `<body style="${defaultBodyStyle}">
	<PullRequestOtherInformation />
</body>`,
	store: new Vuex.Store({
		state: {
			otherInformations: [],
		},
		actions: {
			saveOtherInformations: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

const predefinedState = () => ({
	components: {
		PullRequestOtherInformation,
	},
	template: `<body style="${defaultBodyStyle}">
	<PullRequestOtherInformation />
</body>`,
	store: new Vuex.Store({
		state: {
			otherInformations: [
				"I'm developing some editor extension which can highlight styles",
				'I have no idea why the template option is not padded',
			],
		},
		actions: {
			saveOtherInformations: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

export default {
	initialState,
	predefinedState,
};
