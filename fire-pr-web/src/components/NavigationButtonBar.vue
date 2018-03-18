<template>
	<div class="pure-u-1 pull-request-type__button-container">
		<FirePrButton
			class="pull-request-type__button--left"
			:label="leftLabel"
			:disabled="leftDisabled"
			@click="onLeftButtonClick"
		/>
		<FirePrButton
			class="pull-request-type__button--right"
			:disabled="rightDisabled"
			:label="rightLabel"
			@click="onRightButtonClick"
		/>
	</div>
</template>

<script>
import FirePrButton from './FirePrButton.vue';

export default {
	name: 'NavigationButtonBar',
	components: {
		FirePrButton,
	},
	props: {
		leftLabel: String,
		rightLabel: String,
		leftDisabled: {
			type: Boolean,
			default: false,
		},
		rightDisabled: {
			type: Boolean,
			default: false,
		},
	},
	methods: {
		onLeftButtonClick($event) {
			this.$emit('leftClick', $event);
		},
		onRightButtonClick($event) {
			this.$emit('rightClick', $event);
		},
	},
};
</script>

<style lang="scss" scoped>
.pull-request-type__button-container {
	position: absolute;
	bottom: 6%;
}

.pull-request-type__button--left {
	margin-left: 10%;
	display: inline;
}

.pull-request-type__button--right {
	margin-right: 10%;
	float: right;
	display: inline;
}
</style>
