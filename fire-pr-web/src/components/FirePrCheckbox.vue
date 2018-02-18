<template>
	<div class="pull-request-type__checkbox-container">
		<input
			:checked="checked"
			class="pull-request-type__checkbox-input"
			type="checkbox"
			:id="`fire-pr-checkbox-${_uid}`"
			@click.prevent="toggleChecked"
		/>
		<label
			class="pull-request-type__checkbox-label"
			:for="`fire-pr-checkbox-${_uid}`"
		/>
		<div
			class="pull-request-type__checkbox-text-container"
			@click.prevent="toggleChecked"
		>
			<span
				class="pull-request-type__checkbox-text"
				v-text="label"
			/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'FirePrCheckbox',
	props: {
		checked: Boolean,
		label: String,
	},
	methods: {
		toggleChecked() {
			this.$emit('update:checked', !this.checked);
		},
	},
};
</script>

<style lang="scss" scoped>
.pull-request-type__checkbox-container {
  position: relative;
  height: 25px;
}

.pull-request-type__checkbox-label {
  width: 25px;
  height: 25px;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
  background: #F4F4F9;
  border-radius: 4px;
  border: 1px solid rgba(47, 69, 80, 0.1);
  box-sizing: border-box;
}

.pull-request-type__checkbox-label:after {
  content: '';
  width: 14px;
  height: 7px;
  position: absolute;
  top: 5px;
  left: 3px;
  border: 3px solid #586F7C;
  border-top: none;
  border-right: none;
  background: transparent;
  opacity: 0;
  transform: rotate(-45deg);
}

.pull-request-type__checkbox-input {
  visibility: hidden;
}

.pull-request-type__checkbox-input:checked + label {
	border: 1px solid rgba(47, 69, 80, 0.5);
}

.pull-request-type__checkbox-input:checked + label:after {
  opacity: 1;
}

.pull-request-type__checkbox-text-container {
  display: inline-block;
	cursor: pointer;
}

.pull-request-type__checkbox-text {
	font-family: 'Roboto';
  font-weight: 200;
  padding-left: 14px;
  line-height: 26px;
}
</style>
