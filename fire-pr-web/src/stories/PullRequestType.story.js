import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import PullRequestType from '../views/PullRequestType.vue';

const DEFAULT_BODY_STYLE =
	'width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;';

const initialState = () => ({
	components: {
		PullRequestType,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestType />
	</body>`,
	store: new Vuex.Store({
		state: {
			options: {
				change: {},
			},
		},
		actions: {
			saveChangeOptions: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

const predefinedStateWithoutDescription = () => ({
	components: {
		PullRequestType,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestType />
	</body>`,
	store: new Vuex.Store({
		state: {
			options: {
				change: {
					bugfix: true,
				},
			},
		},
		actions: {
			saveChangeOptions: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

const predefinedStateWitDescription = () => ({
	components: {
		PullRequestType,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
		<PullRequestType />
	</body>`,
	store: new Vuex.Store({
		state: {
			options: {
				change: {
					bugfix: true,
					other: true,
					otherDescription: 'Documentation comment grammar fix',
				},
			},
		},
		actions: {
			saveChangeOptions: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

export default {
	initialState,
	predefinedStateWithoutDescription,
	predefinedStateWitDescription,
};
