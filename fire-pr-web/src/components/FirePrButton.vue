<template>
	<button :class="buttonClass" @click="onButtonClick" v-text="label" />
</template>

<script>
export default {
	name: 'FirePrButton',
	props: {
		disabled: Boolean,
		label: String,
	},
	computed: {
		buttonClass() {
			return {
				'fire-pr__button': !this.disabled,
				'fire-pr__button--disabled': this.disabled,
			};
		},
	},
	methods: {
		onButtonClick() {
			this.$emit('click');
		},
	},
};
</script>

<style lang="scss" scoped>
.fire-pr__button {
	border: 0;
	background: none;
	color: #586f7c;
	font-size: 20px;
	border: 1px solid rgba(88, 111, 124, 0.5);
	padding: 0.4em 0.8em;
	border-radius: 5px;
	transition: all 0.2s ease;

	&:active {
		box-shadow: 0 0 3px #b8dbd9;
		outline: none;
	}

	&:focus {
		box-shadow: 0 0 3px #b8dbd9;
		outline: none;
	}

	&:target {
		outline: none;
		box-shadow: 0 0 3px #b8dbd9;
	}
}

.fire-pr__button--disabled {
	border: 0;
	background: none;
	color: rgba(88, 111, 124, 0.2);
	font-size: 20px;
	border: 1px solid rgba(88, 111, 124, 0.2);
	padding: 0.4em 0.8em;
	border-radius: 5px;
	cursor: not-allowed;
	transition: all 0.2s ease;

	&:active {
		box-shadow: 0 0 3px #b8dbd9;
		outline: none;
	}

	&:focus {
		box-shadow: 0 0 3px #b8dbd9;
		outline: none;
	}

	&:target {
		outline: none;
		box-shadow: 0 0 3px #b8dbd9;
	}
}
</style>
