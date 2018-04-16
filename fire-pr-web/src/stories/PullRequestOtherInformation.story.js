import Vue from 'vue';
import Vuex from 'vuex';
import PullRequestOtherInformation from '../views/PullRequestOtherInformation.vue';

Vue.use(Vuex);

const DEFAULT_BODY_STYLE =
	'width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;';

const initialState = () => ({
	components: {
		PullRequestOtherInformation,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
	<PullRequestOtherInformation />
</body>`,
});

const predefinedState = () => ({
	components: {
		PullRequestOtherInformation,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
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
