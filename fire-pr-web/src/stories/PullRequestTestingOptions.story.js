import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import TestingOptions from '../views/TestingOptions.vue';

Vue.use(Vuex);

const DEFAULT_BODY_STYLE =
	'width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;';

const initialState = () => ({
	components: {
		TestingOptions,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
	<TestingOptions />
</body>`,
	store: new Vuex.Store({
		state: {
			options: {
				testing: null,
			},
		},
		actions: {
			saveTestingOptions: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

const oneTestCaseMultipleSteps = () => ({
	components: {
		TestingOptions,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
	<TestingOptions />
</body>`,
	store: new Vuex.Store({
		state: {
			options: {
				testing: [['Test Scenario', 'Test Steps', 'Parameters']],
			},
		},
		actions: {
			saveTestingOptions: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

const multipleTestCasesMultipleSteps = () => ({
	components: {
		TestingOptions,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
	<TestingOptions />
</body>`,
	store: new Vuex.Store({
		state: {
			options: {
				testing: [
					['Test Scenario', 'Test Steps', 'Parameters'],
					['Test Scenario'],
					['Multiline is lorem ipsum hic forum est lorem ipsum hic forum est'],
				],
			},
		},
		actions: {
			saveTestingOptions: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

export default {
	initialState,
	oneTestCaseMultipleSteps,
	multipleTestCasesMultipleSteps,
};
