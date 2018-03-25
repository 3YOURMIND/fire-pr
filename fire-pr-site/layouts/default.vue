<template>
  <div>
    <div class="navigation">
      <router-link class="navigation__logo-container" :to="'/'">
        <img class="navigation__logo" src="../assets/logo.svg"/>
        <div class="navigation__title">PR</div>
      </router-link>
      <div class="navigation__menu" style="display: inline-block;">
        <div class="navigation__menu-item-container">
          <router-link :to="'/support'">Support</router-link>
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

.navigation__logo {
	height: 100%;
	display: inline-block;
	float: left;
}

.navigation__menu {
	padding-top: 20px;
	padding-bottom: 20px;
	height: 100%;
	display: inline-block;
	float: right;
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
