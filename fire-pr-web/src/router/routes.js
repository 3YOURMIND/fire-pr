import PullRequestType from '../views/PullRequestType.vue';
import PullRequestBreaking from '../views/PullRequestBreaking.vue';
import TestingOptions from '../views/TestingOptions.vue';
import ReviewOptions from '../views/ReviewOptions.vue';
import OtherInformation from '../views/OtherInformation.vue';
import PullRequestChangelog from '../views/PullRequestChangelog.vue';
import PullRequestTitle from '../views/PullRequestTitle.vue';

export default [
	{
		path: '/',
		component: PullRequestTitle,
	},
	{
		path: '/type',
		component: PullRequestType,
	},
	{
		path: '/breaking',
		component: PullRequestBreaking,
	},
	{
		path: '/testing',
		component: TestingOptions,
	},
	{
		path: '/review-merge',
		component: ReviewOptions,
	},
	{
		path: '/other-information',
		component: OtherInformation,
	},
	{
		path: '/changelog',
		component: PullRequestChangelog,
	},
];
