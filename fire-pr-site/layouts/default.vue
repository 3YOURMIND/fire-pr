<template>
  <div class="layout--default">
    <div class="navigation">
      <router-link class="navigation__logo-container" :to="'/'">
        <img class="navigation__logo" src="../assets/logo.svg"/>
        <div class="navigation__title">PR</div>
      </router-link>
      <div class="navigation__menu">
        <div class="navigation__menu-item-container">
          <a href="https://github.com/3YOURMIND/fire-pr" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
        <div class="navigation__menu-item-container">
          <router-link :to="'/why-fire-pr'">Why fire-pr?</router-link>
        </div>
        <div class="navigation__menu-item-container">
          <router-link :to="'/download'">Download</router-link>
        </div>
        <div class="navigation__menu-item-container">
          <router-link :to="'/about'">About</router-link>
        </div>
      </div>
      <div class="navigation__menu--mobile" style="width: 100%;">
        <div class="navigation__menu-item-container--mobile">
          <router-link :to="'/about'">Menu</router-link>
        </div>
      </div>
    </div>
    <nuxt/>
  </div>
</template>

<script>
export default {
	name: 'DefaultLayout',
};
</script>


<style lang="scss" scoped>
.layout--default {
	padding-bottom: 5vh;
}

.navigation__menu-item-container:not(:first-child) {
	margin-right: 32px;
}

.navigation__menu-item-container {
	font-size: 19px;
	font-weight: 700;
	line-height: 50px;
	margin-top: 10px;
	float: right;
	display: inline-block;

	& > a {
		color: #586f7c;
	}
}

.navigation__menu-item-container--mobile {
	font-size: 19px;
	font-weight: 700;
	line-height: 50px;
	margin-top: 10px;
	float: right;
	display: inline-block;

	& > a {
		color: #586f7c;
	}
}

.navigation__menu-item-container--mobile > a:link {
	text-decoration: none;
}

.navigation__menu-item-container--mobile > a:visited {
	text-decoration: none;
}

.navigation__menu-item-container--mobile > a:hover {
	text-decoration: none;
}

.navigation__menu-item-container--mobile > a:active {
	text-decoration: none;
}

.navigation__menu-item-container > a:link {
	text-decoration: none;
}

.navigation__menu-item-container > a:visited {
	text-decoration: none;
}

.navigation__menu-item-container > a:hover {
	text-decoration: none;
	color: #2f4550;
}

.navigation__menu-item-container > a:active {
	text-decoration: none;
}

.navigation__title {
	font-family: 'Roboto';
	display: inline-block;
	line-height: 50px;
	float: left;
	margin-top: 10px;
	font-size: 32px;
	font-weight: 700;
	color: #2f4550;
	margin-left: 10px;
}

.navigation__title {
	@media (max-width: 768px) {
		display: none;
	}
}

.navigation__logo {
	height: 100%;
	display: inline-block;
	float: left;
}

.navigation__menu--mobile {
	padding-top: 20px;
	padding-bottom: 20px;
	height: 100%;
	display: inline-block;
	float: right;

	@media (min-width: 769px) {
		display: none;
	}
}

.navigation__menu {
	padding-top: 20px;
	padding-bottom: 20px;
	height: 100%;
	display: inline-block;
	float: right;
	flex-grow: 1;

	@media (max-width: 768px) {
		display: none;
	}
}

.navigation__logo-container {
	padding-top: 20px;
	padding-bottom: 20px;
	height: 100%;
	display: inline-block;
}

.navigation {
	width: 100%;
	height: 100px;
	padding-left: calc((100% - 1000px) / 2);
	padding-right: calc((100% - 1000px) / 2);
	display: flex;

	@media (max-width: 1064px) {
		padding-left: 32px;
		padding-right: 32px;
	}
}
</style>


<style>
html {
	font-family: 'Roboto';
	/* font-size: 16px;
	word-spacing: 1px; */
	-ms-text-size-adjust: 100%;
	-webkit-text-size-adjust: 100%;
	-moz-osx-font-smoothing: grayscale;
	-webkit-font-smoothing: antialiased;
	box-sizing: border-box;
}
*,
*:before,
*:after {
	box-sizing: border-box;
	margin: 0;
}
</style>
