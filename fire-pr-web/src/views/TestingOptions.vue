<template>
	<div class="main-container">
		<BackButton />
		<h1>Testing procedure</h1>
		<div v-for="(testCase, index) in testCases" :key="index">
			<h2 @click="toggleCollapse(index)">Case {{ index + 1 }}</h2>
			<ol v-if="uncollapsed.includes(index)">
				<li v-for="step in testCase" :key="step" v-text="step" />
			</ol>
		</div>
		<hr />
		<ol>
			<li v-for="step in currentSteps" :key="step" v-text="step" />
		</ol>
		<textarea v-model="testInstruction" placeholder="Test instruction" />
		<button @click="addTestStep">Add Test instruction</button>
		<button @click="addTestCase" :disabled="disableAddTestStep">
			Add New Test Case
		</button>
		<button
			:class="nextClasses"
			:disabled="disableNext"
			@click="saveTestingOptions"
		>
			Next
		</button>
	</div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
	components: {
		BackButton,
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
