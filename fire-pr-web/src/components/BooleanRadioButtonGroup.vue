<template>
	<div class="boolean-radio-button-group__container">
		<div class="pure-u-1">
			<RadioButton
				:checked="!checked"
				:label="'No'"
				:name="'radio'"
				@click="updateBreaking(false)"
			/>
		</div>
		<div class="pure-u-1">
			<RadioButton
				:checked="checked"
				:label="'Yes'"
				:name="'radio'"
				@click="updateBreaking(true)"
			/>
		</div>
	</div>
</template>

<script>
import RadioButton from './RadioButton.vue';

export default {
	name: 'BooleanRadioButtonGroup',
	components: {
		RadioButton,
	},
	props: {
		checked: Boolean,
	},
	methods: {
		updateBreaking(value) {
			this.$emit('update:checked', value);
		},
	},
};
</script>

<style lang="scss" scoped>
.boolean-radio-button-group__container > div:nth-child(n + 2) {
	margin-top: 0.5em;
}
</style>
