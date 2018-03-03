<template>
	<label class="control control--radio" @click="propagateClick">
		<span v-text="label" />
		<input :checked="checked" :name="name" type="radio" />
		<div class="control__indicator" />
	</label>
</template>

<script>
export default {
	name: 'RadioButton',
	props: {
		checked: {
			type: Boolean,
			default: false,
		},
		label: String,
		name: String,
	},
	methods: {
		propagateClick() {
			this.$emit('click');
		},
	},
};
</script>

<style lang="scss" scoped>
.control {
	display: block;
	position: relative;
	padding-left: 30px;
	cursor: pointer;
	font-size: 18px;
	font-family: 'Roboto';
	font-weight: 300;
}
.control span {
	line-height: 150%;
}

.control input {
	position: absolute;
	z-index: -1;
	opacity: 0;
}
.control__indicator {
	position: absolute;
	top: 2px;
	left: 0;
	height: 20px;
	width: 20px;
	background: rgb(244, 244, 249);
	border: 1px solid rgba(47, 69, 80, 0.1);
}
.control--radio .control__indicator {
	border-radius: 50%;
}
.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
	background: rgb(244, 244, 249);
}
.control input:checked ~ .control__indicator {
	background: rgba(47, 69, 80, 0.5);
}
.control__indicator:after {
	content: '';
	position: absolute;
	display: none;
}
.control input:checked ~ .control__indicator:after {
	display: block;
}
.control--radio .control__indicator:after {
	$size: 16px;
	left: calc(50% - (#{$size} / 2));
	top: calc(50% - (#{$size} / 2));
	height: $size;
	width: $size;
	border-radius: 50%;
	background-color: #f4f4f9;
}
.control--radio input:disabled ~ .control__indicator:after {
	background: #7b7b7b;
}
</style>
