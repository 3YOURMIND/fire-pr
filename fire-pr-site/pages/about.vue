<template>
  <section class="container">
    <div class="pure-g">
      <div class="pure-u-1">
        <h1 class="about__heading--first">A Browser Extension for Developers</h1>
      </div>
      <div class="pure-u-1">
        <h2 class="about__heading--second">What is Fire PR?</h2>
      </div>
      <div class="pure-u-1 text__container">
        <p>Fire PR is an opinionated browser extension for easily creating Pull Requests. Right now it is limited to Bitbucket in combination with JIRA but we plan to support other platforms like GitHub or Gitlab really soon.</p>
      </div>
      <div class="pure-u-1">
        <h2 class="about__heading--second">Why should you use Fire PR?</h2>
      </div>
      <div class="pure-u-1 text__container">
        <p>Fire PR is directly aimed at companies. It should streamline the Pull Request review by normalizing it. It adds just the right amount of value which a reviewer needs to complete their Pull Request review.</p>
        <p>In this review, different steps are required and feature in Fire PR. These include:</p>
        <ul>
          <li>A proper title with links to the JIRA issue so people can check requirements easily</li>
          <li>The type of the change to focus on an easier review</li>
          <li>Whether the pr is breaking, to inform the reviewers beforehand if they need to be careful about merging this Pull Request</li>
          <li>Testing instructions to validate if E2E tests, integration tests, and unit tests cover the requirements</li>
          <li>Who should merge it to avoid confusion about the merge</li>
          <li>A changelog message to make it easier for tools or project managers to write a release log</li>
          <li>Plus other information if needed 🤷</li>
        </ul>
      </div>
      <div class="pure-u-1">
        <h2 class="about__heading--second">What is this application built with?</h2>
      </div>
      <div class="pure-u-1 text__container">
        <p>The application was built with modern web technologies and is a fully open source application.</p>
        <p>The company 3YOURMIND behind this product is embracing open source a lot, and we wanted to give something back to the community.</p>
        <p>Here is a list of technologies we used:</p>
        <TechnologyList :technologies="technologies" />
      </div>
    </div>
  </section>
</template>

<script>
import TechnologyList from '../components/TechnologyList.vue';
import VueLogo from '../assets/technology-logos/vue-logo.svg';
import StorybookLogo from '../assets/technology-logos/storybook.svg';
import JestLogo from '../assets/technology-logos/jest.svg';
import PrettierLogo from '../assets/technology-logos/prettier.svg';
import RollupLogo from '../assets/technology-logos/rollup.svg';
import SassLogo from '../assets/technology-logos/sass.svg';
import WebpackLogo from '../assets/technology-logos/webpack.svg';

export default {
	name: 'AboutPage',
	components: {
		TechnologyList,
	},
	data() {
		return {
			technologies: [
				{
					logo: VueLogo,
					logoDescription: '',
					website: 'https://vuejs.org/',
				},
				{
					logo: StorybookLogo,
					logoDescription: '',
					website: 'https://storybook.js.org/',
				},
				{
					logo: JestLogo,
					logoDescription: '',
					website: 'https://facebook.github.io/jest/',
				},
				{
					logo: PrettierLogo,
					logoDescription: '',
					website: 'https://prettier.io/',
				},
				{
					logo: RollupLogo,
					logoDescription: '',
					website: 'https://rollupjs.org/',
				},
				{
					logo: SassLogo,
					logoDescription: '',
					website: 'https://sass-lang.com/',
				},
				{
					logo: WebpackLogo,
					logoDescription: '',
					website: 'https://webpack.js.org/',
				},
			],
		};
	},
	head: {
		title: 'General information of the Pull Request automation extension',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content:
					'A description of Fire PR. It is explaining how the workflow automation tool for Pull Requests was created and why it should be used. It will streamline the Pull Request workflow for different platforms with a nice interface built on top of the newest web technologies such as Vue.js, Jest, rollup, webpack or storybook.',
			},
		],
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/layout.scss';

.text__container {
	margin-top: 0.6em;
	padding-left: 0.6em;
	font-family: 'Roboto';
	font-weight: 300;
	line-height: 1.6em;
	font-size: 21px;
}

.about__heading--first {
	font-size: 38px;
	text-align: left;
	font-weight: 700;
	margin-bottom: 0;
	margin-top: 0;
	max-width: 90%;
	font-family: 'Roboto';
	font-weight: 500;

	@media (max-width: 500px) {
		font-size: 28px;
	}

	@media (max-width: 400px) {
		font-size: 24px;
	}
}

.about__heading--second {
	margin-top: 14px;
	font-size: 24px;
	text-align: left;
	font-weight: 700;
	color: #586f7c;
	max-width: 90%;
	font-family: 'Roboto';
	font-weight: 300;
	text-decoration: none;
}
</style>
