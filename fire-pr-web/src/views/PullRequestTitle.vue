<template>
  <div class="pure-g pull-request-title__container">
    <div class="pure-u-1 pull-request-title__heading-container">
      <h1 class="pull-request-title__heading--first">Pull Request Title</h1>
    </div>
    <div class="pure-u-1 pull-request-title__input-container">
      <input autofocus class="pull-request-title__input" v-model="title" />
    </div>
    <div class="pure-u-1 pull-request-title__button-container">
      <button class="pull-request-title__button" @click="onNextClick">
        Next
      </button>
    </div>
  </div>
</template>

<script>
export default {
	name: 'PullRequestTitle',
	data () {
		return {
			title: '',
		}
	},
	methods: {
		onNextClick() {
			this.$store.dispatch('saveTitle', this.title);
			this.$router.push('/type');
		}
	}
};
</script>

<style lang="scss" scoped>
::selection {
	background: #B8DBD9;
}

.pull-request-title__button-container {
	text-align: center;
	position: absolute;
	bottom: 6%;
}

.pull-request-title__heading-container {
	text-align: center;
	margin-top: 35%;
}

.pull-request-title__input-container {
	text-align: center; margin-top: 1.61em;
}

.pull-request-title__container {
	font-size: 16px;
}

.pull-request-title__heading--first {
	font-family: 'Roboto';
	font-weight: 300;
	color: #2F4550;
	margin-top: 0.61em;
	margin-bottom: 0.61em;
}

.pull-request-title__input {
	background-color: #F4F4F9;
	border: 0;
	border: 1px solid rgba(88, 111, 124, 0.5);
	color: #586F7C;
	font-family: 'Roboto';
	font-weight: 300;
	border-radius: 5px;
	font-size: 2em;
	height: 1.61em;
	width: 80%;
	padding-left: 12px;
	padding-right: 12px;
}

.pull-request-title__input:focus {
	outline: none;
	box-shadow: 0 0 3px #B8DBD9;
}

.pull-request-title__button {
	border: 0;
	background: none;
	color: #586F7C;
	font-size: 20px;
	border: 1px solid rgba(88, 111, 124, 0.5);
	padding: 0.4em 0.8em;
	border-radius: 5px;

	&:active {
		box-shadow: 0 0 3px #B8DBD9;
		outline: none;
	}

	&:focus {
		box-shadow: 0 0 3px #B8DBD9;
		outline: none;
	}

	&:target {
		outline: none;
		box-shadow: 0 0 3px #B8DBD9;
	}
}
</style>

