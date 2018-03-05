import TheNoBitbucketSite from '../components/TheNoBitbucketSite.vue';

const DEFAULT_BODY_STYLE =
	'width: 375px; height: 580px; background-color: #F4F4F9; position: absolute; top: 8px; left: 8px;';

const initialState = () => ({
	components: {
		TheNoBitbucketSite,
	},
	template: `<body style="${DEFAULT_BODY_STYLE}">
			<TheNoBitbucketSite />
		</body>`,
});

export default {
	initialState,
};
