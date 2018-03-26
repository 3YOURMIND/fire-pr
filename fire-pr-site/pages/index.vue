<template>
  <section class="container">
    <div class="pure-g" style="width: 100%;">
      <div class="pure-u-1 pure-u-sm-1-2 pure-g">
        <div class="content">
          <h1 class="pure-u-1content__heading--first">Crafting Pull Requests</h1>
          <span class="pure-u-1 content__description">Optimize the developer experience by generating pull requests more quickly and more reliant.</span>
          <div class="pure-u-1" style="margin-top: 24px;">
            <a :href="downloadUrl" rel="noopener noreferrer" target="_blank" class="content__button" v-text="downloadFor"></a>
          </div>
          <span class="pure-u-1 content__button-description">Works with JIRA + Bitbucket</span>
        </div>
      </div>
      <div class="pure-u-1-2 illustration__grid-container">
        <div class="image__container">
          <TheIllustration class="content-image" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import TheIllustration from '~/components/TheIllustration.vue';

export default {
	components: {
		TheIllustration,
	},
	data() {
		return {
			browser: '',
		};
	},
	computed: {
		downloadFor() {
			return `Download for ${this.browser}`;
		},
		downloadUrl() {
			if (this.browser === 'Chrome') {
				return 'https://chrome.google.com/webstore/detail/fire-pr-chrome-extension/mcpcdbmbifcjeeedncbcajkljmdjdgoh';
			}
			if (this.browser === 'Firefox') {
				return 'https://addons.mozilla.org/en-US/firefox/addon/fire-pr/';
			}
			return 'https://chrome.google.com/webstore/detail/fire-pr-chrome-extension/mcpcdbmbifcjeeedncbcajkljmdjdgoh';
		},
	},
	created() {
		this.browser = this.getBrowser();
	},
	methods: {
		getBrowser() {
			if (process.browser) {
				var isOpera =
					(!!window.opr && !!opr.addons) ||
					!!window.opera ||
					navigator.userAgent.indexOf(' OPR/') >= 0;
				var isFirefox = typeof InstallTrigger !== 'undefined';
				if (isFirefox) {
					return 'Firefox';
				}
				var isSafari =
					/constructor/i.test(window.HTMLElement) ||
					(function(p) {
						return p.toString() === '[object SafariRemoteNotification]';
					})(
						!window['safari'] ||
							(typeof safari !== 'undefined' && safari.pushNotification),
					);
				var isIE = /*@cc_on!@*/ false || !!document.documentMode;
				var isEdge = !isIE && !!window.StyleMedia;
				var isChrome = !!window.chrome && !!window.chrome.webstore;
				var isBlink = (isChrome || isOpera) && !!window.CSS;
				if (isChrome) {
					return 'Chrome';
				}
			}
			return 'Chrome';
		},
	},
};
</script>

<style lang="scss" scoped>
.illustration__grid-container {
	@media (max-width: 568px) {
		display: none;
	}
}

.image__container {
	margin-left: 15%;
	height: 60vh;
	margin-top: 10vh;
}

.content-image {
	transform: rotate(12deg);
	height: 100%;
	width: auto;
}

.content {
	margin-top: 18vh;
}

.content__button-description {
	color: #b8dbd9;
	font-weight: 500;
	margin-left: 14px;
	font-size: 16px;
	margin-top: 0.6em;
	font-family: 'Roboto';
}

.content__button {
	display: table-cell;
	vertical-align: middle;
	margin-top: 24px;
	background: white;
	border: 2px solid rgba(88, 111, 124, 0.5);
	border-radius: 10px;
	font-size: 19px;
	padding-top: 11px; // (19 * 1.6) / 2
	padding-bottom: 11px;
	padding-left: 40px;
	padding-right: 40px;
	color: #586f7c;
	font-weight: 700;
	margin-left: 10px;
	box-sizing: border-box;
	font-family: 'Roboto';
}

.content__button:link {
	text-decoration: none;
}

.content__button:visited {
	text-decoration: none;
}

.content__button:hover {
	text-decoration: none;
}

.content__button:active {
	text-decoration: none;
}

.content__heading--first {
	font-size: 38px;
	text-align: left;
	font-weight: 700;
	margin-bottom: 0;
	margin-top: 0;
	max-width: 90%;
	font-family: 'Roboto';
}

.content__description {
	margin-top: 14px;
	font-size: 24px;
	text-align: left;
	font-weight: 700;
	color: #586f7c;
	max-width: 90%;
	font-family: 'Roboto';
}

.container {
	display: flex;
	padding-left: calc((100% - 1000px) / 2);
	padding-right: calc((100% - 1000px) / 2);
	font-family: 'Roboto';
}
</style>
