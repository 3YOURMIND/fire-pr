<template>
  <section class="container" style="display: flex; justify-content: center; align-items: center;">
    <div class="pure-g" style="width: 100%;">
      <div class="pure-u-sm-1-2 pure-u-1">
        <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
          <a rel="noopener noreferrer" target="_blank" href="https://chrome.google.com/webstore/detail/fire-pr-chrome-extension/mcpcdbmbifcjeeedncbcajkljmdjdgoh" style="width: 100%;">
            <img class="store__image" src="../assets/chrome-webstore.svg" alt="" />
          </a>
        </div>
      </div>
      <div class="pure-u-sm-1-2 pure-u-1">
        <div style="display: flex; justify-content: center; align-items: center; height: 100%;">
          <a rel="noopener noreferrer" target="_blank" href="https://addons.mozilla.org/en-US/firefox/addon/fire-pr/" style="width: 100%;">
            <img class="store__image" style="width: 100%;" src="../assets/firefox-addon.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
	name: 'DownloadPage',
	head: {
		title: 'Locations to download the extension for Chrome and Firefox',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content:
					'The download pages provided for the browser extension Fire PR. The extension is available on the chrome web store and in the firefox add-ons marketplace. It is easy to install and will streamline and optimize the process of creating Pull Requests on Bitbucket in combination with JIRA.',
			},
		],
	},
};
</script>

<style lang="scss" scoped>
@import '../assets/scss/layout.scss';

.store__image {
	width: 100%;
	filter: grayscale(1);
	transform: scale(0.85);
	transition: all 0.15s ease-in;

	&:hover {
		filter: grayscale(0);
		transition: all 0.15s ease-out;
		transform: scale(0.9);
	}
}
</style>
