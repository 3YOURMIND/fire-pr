<template>
	<div class="pure-g pull-request-type__container">
		<div class="pure-u-1">
			<h3>What kind of change does this PR introduce?</h3>
		</div>
		<div class="pure-u-1">
			<p>
				<input type="checkbox" v-model="options.bugfix" />
				<label>Bugfix</label>
			</p>
		</div>
		<div class="pure-u-1">
			<p>
				<input type="checkbox" v-model="options.feature" />
				<label>Feature</label>
			</p>
		</div>
		<div class="pure-u-1">
			<p>
				<input type="checkbox" v-model="options.codeStyle" />
				<label>Code style update</label>
			</p>
		</div>
		<div class="pure-u-1">
			<p>
				<input type="checkbox" v-model="options.refactor" />
				<label>Refactor</label>
			</p>
		</div>
		<div class="pure-u-1">
			<p>
				<input type="checkbox" v-model="options.build" />
				<label>Build-related changes</label>
			</p>
		</div>
		<div class="pure-u-1">
		<p>
			<input type="checkbox" v-model="options.other" />
			<label>Other: Please describe</label>
			<input
				type="text"
				v-if="options.other"
				v-model="options.otherDescription"
			/>
		</p>
		</div>
		<button :disabled="buttonEnabled" @click="saveChangeOptions">
			Next
		</button>
	</div>
</template>

<script>
export default {
	name: 'PullRequestType',
	data() {
		return {
			options: {
				bugfix: false,
				feature: false,
				codeStyle: false,
				refactor: false,
				build: false,
				other: false,
				otherDescription: '',
			},
		};
	},
	computed: {
		buttonEnabled() {
			if (this.options.other && this.options.otherDescription !== '') {
				return false;
			}
			if (
				this.options.build ||
				this.options.refactor ||
				this.options.codeStyle ||
				this.options.feature ||
				this.options.bugfix
			) {
				return false;
			}
			return true;
		},
	},
	methods: {
		saveChangeOptions() {
			this.$store.dispatch('saveChangeOptions', this.options);
			this.$router.push('/breaking');
		},
	},
};
</script>

<style lang="scss" scoped>
.pull-request-type__container {
	font-size: 16px;
}
</style>

