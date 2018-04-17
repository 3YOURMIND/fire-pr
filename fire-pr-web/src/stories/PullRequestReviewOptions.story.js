import ReviewOptions from '../views/ReviewOptions.vue';
import defaultBodyStyle from './DefaultBodyStyle';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const initialState = () => ({
	components: {
		ReviewOptions,
	},
	template: `<body style="${defaultBodyStyle}">
	<ReviewOptions />
</body>`,
	store: new Vuex.Store({
		state: {
			options: {
				merge: {
					merger: null,
					mergeTime: null,
				},
			},
		},
		actions: {
			saveMergeOptions: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

const predefinedState = () => ({
	components: {
		ReviewOptions,
	},
	template: `<body style="${defaultBodyStyle}">
	<ReviewOptions />
</body>`,
	store: new Vuex.Store({
		state: {
			options: {
				merge: {
					merger: 'last',
					mergeTime: 'all',
				},
			},
		},
		actions: {
			saveMergeOptions: (context, payload) => {
				action('COMMIT TO STORE')(payload);
			},
		},
	}),
});

export default {
	initialState,
	predefinedState,
};
