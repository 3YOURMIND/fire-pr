import ReviewOptions from '../views/ReviewOptions.vue';
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const DEFAULT_BODY_STYLE =
	'width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;';

const initialState = () => ({
	components: {
		ReviewOptions,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
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
	template: `<body style="${DEFAULT_BODY_STYLE}">
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
