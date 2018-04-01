<template>
  <div>
    <section class="container">
      <div class="pure-g" style="width: 100%;">
        <div class="pure-u-1 pure-u-sm-1-2 pure-g">
          <div class="content">
            <h1 class="pure-u-1 content__heading--first">
              Crafting Pull Requests
            </h1>
            <span class="pure-u-1 content__description">
              Optimize the developer experience by generating pull requests more
              quickly and more reliant.
            </span>
            <div class="pure-u-1 content__button-container">
              <a
                :href="downloadUrl"
                rel="noopener noreferrer"
                target="_blank"
                class="content__button"
                v-text="downloadFor"
              />
            </div>
            <span class="pure-u-1 content__button-description">
              Works with JIRA + Bitbucket
            </span>
          </div>
        </div>
        <div class="pure-u-1-2 illustration__grid-container">
          <div class="image__container">
            <TheIllustration />
          </div>
        </div>
        <div
          class="pure-u-1-1 illustration__grid-container--mobile"
          style="margin-top: 5vh;"
        >
          <div>
            <TheIllustrationMobile style="width:70%; margin-left: auto; margin-right: auto; display: block" />
          </div>
        </div>
      </div>
    </section>
    <div class="testimonial__background-container">
      <svg
        class="testimonial__background"
        height="100%"
        viewBox="0 0 1900 700"
        style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:1.41421;"
      >
        <clipPath id="_clip1">
          <path d="M1900,328.169l0,-328.169l-1900,0l0,328.169l1900,0Z" />
        </clipPath>
        <g clip-path="url(#_clip1)">
          <path
            d="M2094.2,164.085c0,-90.561 -515.709,-164.085 -1150.92,-164.085c-635.208,0 -1150.92,73.524 -1150.92,164.085c268.548,-27.169 691.808,-49.226 1150.92,-49.226c459.11,0 882.37,22.057 1150.92,49.226Z"
            style="fill:#d3dcda;"
          />
        </g>
        <clipPath id="_clip2">
          <path d="M1935.01,471.181l-1935.01,-121.181l-35.014,305.007l1935.01,121.181l35.014,-305.007Z" />
        </clipPath>
        <g clip-path="url(#_clip2)">
          <path
            d="M-653.73,519.511c0,0 529.847,112.169 999.925,157.698c470.077,45.529 866.982,-35.007 866.982,-35.007c0,0 227.092,-69.515 674.752,-34.261c447.661,35.253 -546.7,-200.267 -546.7,-200.267l-1953.21,-16.928l-41.75,128.765Z"
            style="fill:#d3dcda;"
          />
        </g>
        <rect
          x="0"
          y="72.967"
          width="1935.01"
          height="490.126"
          style="fill:#d3dcda;"
        />
      </svg>
      <div class="container testimonial__container--parent">
        <div class="pure-g testimonial__container">
          <div class="pure-u-1 pure-u-sm-3-5 testimonial__illustration-container">
            <TheIllustrationPullRequestExample class="testimonial__illustration" />
          </div>
          <div class="pure-u-1 pure-u-sm-2-5" style="display: flex; align-items: center; padding-left: 10px;">
            <div class="pure-g">
              <div class="pure-u-1">
                <span class="content__description" style="line-height: 1.6em;">
                  Create awesome Pull Requests that makes everyone happy.
                </span>
              </div>
              <div class="pure-u-1" style="margin-top: 0.6em;">
                <router-link :to="'/about'" class="content__description" style="font-weight: 500;">
                  Show me how <b>→</b>
                </router-link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import TheIllustration from '../components/TheIllustration.vue';
import TheIllustrationMobile from '../components/TheIllustrationMobile.vue';
import TheIllustrationPullRequestExample from '../components/TheIllustrationPullRequestExample.vue';

export default {
	head: {
		title: 'Fire PR | Pull Request Tooling',
		meta: [
			{
				hid: 'description',
				name: 'description',
				content:
					'Fire PR is a browser extension trying to streamline the pull request workflow for developers by providing an interface to create those in an easy way. The tool is trying to optimize the work flows.',
			},
		],
	},
	components: {
		TheIllustration,
		TheIllustrationMobile,
		TheIllustrationPullRequestExample,
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
@import '../assets/scss/layout.scss';

.content__button-container {
	margin-top: 24px;
}

.testimonial__container--parent {
	margin-top: calc(100vw * -0.36837);
	height: calc(100vw * 0.36837);

	@media (max-width: 767px) {
		margin-top: 0;
		height: 100%;
	}
}

.testimonial__background-container {
	position: relative;
	margin-top: 5em;

	@media (max-width: 767px) {
		margin-top: 0;
	}
}

.testimonial__background {
	@media (max-width: 767px) {
		display: none;
	}
}

.testimonial__illustration-container {
	height: 100%;
	line-height: 1.6em;
	color: #586f7c;
	font-weight: 500;
	text-decoration: none;
	display: flex;
	padding-right: 30px;
	justify-content: center;
}

.testimonial__illustration {
	@media (max-width: 1300px) {
		width: 40vw;
	}

	@media (max-width: 568px) {
		width: 100%;
	}
}

.testimonial__container {
	width: 100%;
}

.illustration__grid-container--mobile {
	@media (min-width: 569px) {
		display: none;
	}
}

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
	@media (max-width: 568px) {
		margin-top: 7vh;
	}
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
	font-weight: 500;

	@media (max-width: 500px) {
		font-size: 28px;
	}

	@media (max-width: 400px) {
		font-size: 24px;
	}
}

.content__description {
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
