<template>
	<div class="pure-g pull-request-type__container">
		<div class="pure-u-1 pull-request-type__heading-container">
			<h1 class="pull-request-type__heading--first">
				Pull Request Type
			</h1>
		</div>
		<div class="pure-u-1">
			<FirePrCheckbox :checked.sync="options.bugfix" :label="'Bugfix'" />
		</div>
		<div class="pure-u-1">
			<FirePrCheckbox :checked.sync="options.feature" :label="'Feature'" />
		</div>
		<div class="pure-u-1">
			<FirePrCheckbox :checked.sync="options.codeStyle" :label="'Code style'" />
		</div>
		<div class="pure-u-1">
			<FirePrCheckbox :checked.sync="options.refactor" :label="'Refactor'" />
		</div>
		<div class="pure-u-1">
			<FirePrCheckbox :checked.sync="options.build" :label="'Build-related changes'" />
		</div>
		<div class="pure-u-1">
			<FirePrCheckbox :checked.sync="options.other" :label="'Other: Please describe'" />
			<p>
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
import FirePrCheckbox from '../components/FirePrCheckbox.vue';

export default {
	name: 'PullRequestType',
	components: {
		FirePrCheckbox,
	},
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
		test(newValue) {
			debugger;
			options.bugfix = newValue;
		},
	},
};
</script>

<style lang="scss" scoped>
.pull-request-type__container {
	font-size: 16px;
}

.pull-request-type__heading--first {
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
	margin-top: 0.61em;
	margin-bottom: 0.61em;
}

.pull-request-type__heading-container {
	text-align: center;
}
</style>
