import TheNoBitbucketSite from '../components/TheNoBitbucketSite.vue';
import defaultBodyStyle from './DefaultBodyStyle';

const initialState = () => ({
	components: {
		TheNoBitbucketSite,
	},
	template: `<body style="${defaultBodyStyle}">
			<TheNoBitbucketSite />
		</body>`,
});

export default {
	initialState,
};
