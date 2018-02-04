import PullRequestType from '../views/PullRequestType.vue';
import BreakingOptions from '../views/BreakingOptions.vue';
import TestingOptions from '../views/TestingOptions.vue';
import ReviewOptions from '../views/ReviewOptions.vue';


export default [
  {
    path: '/',
    component: PullRequestType,
  },
  {
    path: '/breaking',
    component: BreakingOptions,
  },
  {
    path: '/testing',
    component: TestingOptions,
  },
  {
    path: '/review-merge',
    component: ReviewOptions,
  },
];
