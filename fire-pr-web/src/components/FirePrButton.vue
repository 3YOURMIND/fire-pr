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
		onButtonClick($event) {
			this.$emit('click', $event);
		},
	},
};
</script>

<style lang="scss" scoped>
@mixin common-button-style() {
	background: none;
	border: 0;
	border-radius: 5px;
	font-family: 'Roboto';
	font-size: 20px;
	font-weight: 300;
	padding: 0.4em 0.8em;
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

.fire-pr__button {
	@include common-button-style();

	border: 1px solid rgba(88, 111, 124, 0.5);
	color: #586f7c;
}

.fire-pr__button--disabled {
	@include common-button-style();

	border: 1px solid rgba(88, 111, 124, 0.2);
	color: rgba(88, 111, 124, 0.2);
	cursor: not-allowed;
}
</style>
