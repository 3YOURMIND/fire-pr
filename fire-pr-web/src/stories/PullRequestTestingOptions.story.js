import Vue from 'vue';
import Vuex from 'vuex';
import { action } from '@storybook/addon-actions';
import TestingOptions from '../views/TestingOptions.vue';
import defaultBodyStyle from './DefaultBodyStyle';

Vue.use(Vuex);

const initialState = () => ({
	components: {
		TestingOptions,
	},
	template: `<body style="${defaultBodyStyle}">
	<TestingOptions />
</body>`,
	store: new Vuex.Store({
		state: {
			options: {
				testing: [],
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
	template: `<body style="${defaultBodyStyle}">
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
	template: `<body style="${defaultBodyStyle}">
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
