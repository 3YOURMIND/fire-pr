<template>
  <section class="container">
    <div class="pure-g" style="width: 100%;">
      <div class="pure-u-1">
        <h1 class="why-fire-pr__heading--first">Why fire-pr?</h1>
      </div>
      <div class="pure-u-1">
        <h2 class="why-fire-pr__heading--second">About Pull Requests</h2>
      </div>
      <div class="pure-u-1 why-fire-pr__text" style="padding-left: 0.6em; margin-top: 0.6em;">
        <p>We spent more time reading code than writing code. Therefore it is important to have some kind of code review process so just good code is getting into the code base.</p>
        <p>With this goal in mind, it is also important to have a nice experience when reviewing the code. To make this easier this tool exists. We can also save a lot of time designing the Pull Request.</p>
      </div>
      <div class="pure-u-1">
        <h2 class="why-fire-pr__heading--second">How is Fire PR so fast at creating Pull Requests?</h2>
      </div>
      <div class="pure-u-1 why-fire-pr__text" style="padding-left: 0.6em; margin-top: 0.6em;">
        <p>Basically, it is an interface generating the markdown for the Pull Request description. It includes different topics of a Pull Request to make it as easy as possible to review a code change.</p>
        <p>This is done by preparing the reviewer with general information of the code change. An example can be found below which shows the interface of the extension and the output inside the description container of the Pull Request.</p>
        <div class="pure-g" style="margin-top: 0.6em;">
          <div class="pure-u-1 pure-u-sm-1-2" style="display: flex; justify-content: center;">
            <img src="../assets/in-extension-1.png" alt="" style="max-width: 100%; height: auto;" />
          </div>
          <div class="pure-u-1 pure-u-sm-1-2" style="display: flex; justify-content: center;">
            <img src="../assets/pr-created.svg" alt="" style="width: 100%;"/>
          </div>
        </div>
      </div>
      <div class="pure-u-1">
        <h2 class="why-fire-pr__heading--second">This tool seems really easy</h2>
      </div>
      <div class="pure-u-1 why-fire-pr__text" style="padding-left: 0.6em; margin-top: 0.6em;">
        <p>This is true. But since no Interface for this was existing yet, we decided to create this. We live the standard that there should be a tool for every use case and that engineers should interfacivize everything which is possible so the user experience is begin guaranteed.</p>
      </div>
      <div class="pure-u-1">
        <h2 class="why-fire-pr__heading--second">This tool is opinionated</h2>
      </div>
      <div class="pure-u-1 why-fire-pr__text" style="padding-left: 0.6em; margin-top: 0.6em;">
        <p>This tool is opinionated to set a standard. Developers should not waste time on how to create Pull Requests. Rather they should just use the tool and make the best out of it. The project is open to discussions and maybe even configuration in the future.</p>
        <p>This opinionated mindset helps also to create some kind of consistency throughout Pull Requests. This leads to new engineers understanding the reason behind a Pull Request a lot faster. They can grab up testing instructions and test the code for it or look if the tests which are included in the Pull Request are fully testing the requirements. This consistency gives new developers also a feeling of security since they are used on how to deal with Pull Requests now.</p>
        <p>Other tools like prettier are also opinionated and have great success. To see why they are successful lookup <a target="_blank" rel="noopener noreferrer" href="https://prettier.io/docs/en/why-prettier.html">their site</a> why you should use it.</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	name: 'WhyFirePrPage',
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/layout.scss';

.why-fire-pr__text {
	font-family: 'Roboto';
	font-weight: 300;
	line-height: 1.6em;
	font-size: 21px;
}

.why-fire-pr__heading--first {
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

.why-fire-pr__heading--second {
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
