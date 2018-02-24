<template>
	<div class="pure-g pull-request-testing__container">
		<div class="pure-u-1 pull-request-testing__heading-container">
			<h1 class="pull-request-testing__heading--first">Testing procedure</h1>
		</div>
		<div class="pure-u-1" style="padding-left: 6%; padding-right: 6%;" v-if="testCases.length > 0">
			<div v-for="(testCase, index) in testCases" :key="index">
				<h2 @click="toggleCollapse(index)">Case {{ index + 1 }}</h2>
				<ol v-if="uncollapsed.includes(index)">
					<li v-for="step in testCase" :key="step" v-text="step" />
				</ol>
			</div>
		</div>
		<div class="pure-u-1">
			<hr class="pull-request-testing__divider" style="margin: 0; margin-bottom: 0.61em;" />
		</div>
		<div class="pure-u-1" style="padding-left: 6%; padding-right: 6%; margin: 0;" v-if="currentSteps.length > 0">
			<ol style="margin: 0; margin-bottom: 0.61em; margin-top: 0;">
				<li v-for="step in currentSteps" :key="step" v-text="step" />
			</ol>
		</div>
		<div class="pure-u-1" style="padding-left: 6%; padding-right: 6%;">
			<textarea
				class="pull-request-testing__input"
				v-model="testInstruction"
				placeholder="Test instruction"
			/>
		</div>
		<div class="pure-g" style="width: 100%; padding-left: 6%; padding-right: 6%; margin-top: 0.61em;">
			<div class="pure-u-1-2">
				<div style="padding-right: 10px; width: 100%;">
					<FirePrButton
						:label="'Add instruction'"
						@click="addTestStep"
						style="float: left; display: inline; font-size: 15px; width: 100%;"
					/>
				</div>
			</div>
			<div class="pure-u-1-2">
				<div style="padding-left: 10px; width: calc(100% - 10px);">
					<FirePrButton
						:label="'Add Test Case'"
						:disabled="disableAddTestStep"
						@click="addTestCase"
						style="float: right; display: inline; font-size: 15px; width: 100%;"
					/>
				</div>
			</div>
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
.pull-request-testing__divider {
	display: block;
	height: 1px;
	border: 0;
	border-top: 1px solid rgba(88, 111, 124, 0.5);
	margin: 1em 0;
	padding: 0;
}

.pull-request-testing__input {
	box-sizing: border-box;
	background-color: #f4f4f9;
	border: 0;
	border: 1px solid rgba(88, 111, 124, 0.5);
	color: #586f7c;
	font-family: 'Roboto';
	font-weight: 300;
	border-radius: 3px;
	font-size: 1em;
	width: 100%;
	padding-left: 6px;
	padding-right: 6px;
	padding-top: calc(0.61em / 2);
	padding-bottom: calc(0.61em / 2);

	resize: none;

	&:focus {
		outline: none;
		box-shadow: 0 0 3px #b8dbd9;
	}
}

.pull-request-testing__container {
	font-size: 16px;
}

.pull-request-testing__heading-container {
	text-align: center;
}

.pull-request-testing__heading--first {
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
	margin-top: 0.61em;
	margin-bottom: 0.61em;
}

.pull-request-testing__button-container {
	position: absolute;
	bottom: 6%;
}
</style>

