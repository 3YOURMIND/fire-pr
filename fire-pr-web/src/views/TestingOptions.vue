<template>
	<div class="pure-g testing-options__container">
		<div class="pure-u-1">
			<h1>Testing procedure</h1>
		</div>
		<div class="pure-u-1">
			<div v-for="(testCase, index) in testCases" :key="index">
				<h2 @click="toggleCollapse(index)">Case {{ index + 1 }}</h2>
				<ol v-if="uncollapsed.includes(index)">
					<li v-for="step in testCase" :key="step" v-text="step" />
				</ol>
			</div>
		</div>
		<div class="pure-u-1">
			<hr />
		</div>
		<div class="pure-u-1">
			<ol>
				<li v-for="step in currentSteps" :key="step" v-text="step" />
			</ol>
		</div>
		<div class="pure-u-1">
			<textarea v-model="testInstruction" placeholder="Test instruction" />
		</div>
		<div class="pure-u-1">
			<button @click="addTestStep">Add Test instruction</button>
		</div>
		<div class="pure-u-1">
			<button @click="addTestCase" :disabled="disableAddTestStep">
				Add New Test Case
			</button>
		</div>
		<div class="pure-u-1 pull-request-testing__button-container">
			<FirePrButton
				:label="'Back'"
				@click="$router.back()"
				style="margin-left: 10%; float: left; display: inline;"
			/>
			<FirePrButton
				:disabled="disableNext"
				:label="'Next'"
				@click="saveBreakingOptions"
				style="margin-right: 10%; float: right; display: inline;"
			/>
		</div>
	</div>
</template>

<script>
import BackButton from '../components/BackButton.vue';
import FirePrButton from '../components/FirePrButton.vue';

export default {
	components: {
		BackButton,
		FirePrButton,
	},
	data() {
		return {
			testCases: [],
			currentSteps: [],
			uncollapsed: [],
			testInstruction: '',
		};
	},
	computed: {
		disableAddTestStep() {
			return this.currentSteps.length < 1;
		},
		disableNext() {
			return this.testCases.length < 1;
		},
		nextClasses() {
			return {
				'next-button': true,
				disabled: this.disableNext,
			};
		},
	},
	methods: {
		toggleCollapse(index) {
			if (this.uncollapsed.includes(index)) {
				this.uncollapsed = [...this.uncollapsed.filter(e => e !== index)];
				return;
			}
			this.uncollapsed = [...this.uncollapsed, index];
		},
		saveTestingOptions() {
			this.$store.dispatch('saveTestingOptions', this.testCases);
			this.$router.push('/review-merge');
		},
		addTestStep() {
			this.currentSteps.push(this.testInstruction);
			this.testInstruction = '';
		},
		addTestCase() {
			this.testCases.push(this.currentSteps);
			this.currentSteps = [];
			this.testInstruction = '';
		},
	},
};
</script>

<style lang="scss" scoped>
.testing-options__container {
	font-size: 16px;
}

.pull-request-testing__button-container {
	position: absolute;
	bottom: 6%;
}
</style>

