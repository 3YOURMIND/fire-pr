<template>
  <section class="container">
    <div class="pure-g">
      <div class="pure-u-1">
        <h1 class="about__heading--first">A Browser Extension for Developers</h1>
      </div>
      <div class="pure-u-1">
        <h2 class="about__heading--second">What is Fire PR?</h2>
      </div>
      <div class="pure-u-1" style="margin-top: 0.6em; padding-left: 0.6em;">
        <p class="about__text">Fire PR is an opinionated browser extension to easily create Pull Requests. Right now it is limited to Bitbucket in combination with JIRA but we plan to support other platforms like GitHub or Gitlab really soon.</p>
        <!-- <p class="about__paragraph"></p> -->
      </div>
      <div class="pure-u-1">
        <h2 class="about__heading--second">Why you should use Fire PR?</h2>
      </div>
      <div class="pure-u-1 about__text" style="padding-left: 0.6em; margin-top: 0.6em;">
        <p>Fire PR is directly aimed to companies. It should streamline the Pull Request review by normalizing it. It adds the right amount of value which a reviewer needs to complete the Pull Request review.</p>
        <p>In this review different steps are required which are featured in Fire PR which includes:</p>
        <ul>
          <li>A proper title with links to the JIRA issue so people can check requirements easily</li>
          <li>The type of the change to focus on an easier review</li>
          <li>If the pr is breaking to inform the reviewers beforehand if they need to be careful about merging this Pull Request</li>
          <li>Testing instructions to validate if E2E tests, integration tests and unit tests are covering the requirements</li>
          <li>Who should merge it to avoid confusion about the merge</li>
          <li>A changelog message to make it easier for tools or project managers to write a release log</li>
          <li>And other information if needed 🤷</li>
        </ul>
      </div>
      <div class="pure-u-1">
        <h2 class="about__heading--second">What is this application built with?</h2>
      </div>
      <div class="pure-u-1 about__text" style="padding-left: 0.6em; margin-top: 0.6em;">
        <p>The application was built with modern web technologies and is fully open source.</p>
        <p>The company 3YOURMIND behind this product is embracing open source a lot. And we wanted to give something back to the community.</p>
        <p>Here is a list of used technologies:</p>
        <div class="technology-logo__container">
          <div class="technology-logo__item-container">
            <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer">
              <img src="../assets/technology-logos/vue-logo.svg" alt="" />
            </a>
          </div>
          <div class="technology-logo__item-container">
            <a href="https://storybook.js.org/" target="_blank" rel="noopener noreferrer">
              <img src="../assets/technology-logos/storybook.svg" alt="" />
            </a>
          </div>
          <div class="technology-logo__item-container">
            <a href="https://facebook.github.io/jest/" target="_blank" rel="noopener noreferrer">
              <img src="../assets/technology-logos/jest.svg" alt="" />
            </a>
          </div>
          <div class="technology-logo__item-container">
            <a href="https://prettier.io/" target="_blank" rel="noopener noreferrer">
              <img src="../assets/technology-logos/prettier.svg" alt="" />
            </a>
          </div>
          <div class="technology-logo__item-container">
            <a href="https://rollupjs.org/" target="_blank" rel="noopener noreferrer">
              <img src="../assets/technology-logos/rollup.svg" alt="" />
            </a>
          </div>
          <div class="technology-logo__item-container">
            <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
              <img src="../assets/technology-logos/sass.svg" alt="" />
            </a>
          </div>
          <div class="technology-logo__item-container">
            <a href="https://webpack.js.org/" target="_blank" rel="noopener noreferrer">
              <img src="../assets/technology-logos/webpack.svg" alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	name: 'AboutPage',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/layout.scss';

.technology-logo__item-container {
	min-width: 168px;
	max-width: 168px;
	margin-top: 20px;
	filter: grayscale(1);
	transition: all 0.15s ease-in;

	&:hover {
		filter: grayscale(0);
		transition: all 0.15s ease-out;
	}
}

.technology-logo__container {
	display: flex;
	justify-content: center;
	max-width: 1000px;
	position: relative;
	flex-direction: row;
	flex-wrap: wrap;
}

.about__text {
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
