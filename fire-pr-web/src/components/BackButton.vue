<template>
	<p>
		<a class="back-button" @click="back">
			&lt; Back
		</a>
	</p>
</template>

<script>
export default {
	methods: {
		back() {
			this.$router.back();
		},
	},
};
</script>

<style lang="scss" scoped>
.back-button {
	margin-top: 20px;
	text-decoration: none;
	color: #888;
}
</style>
