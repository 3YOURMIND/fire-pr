<template>
	<div class="pure-g pull-request-testing__container">
		<div class="pure-u-1 pull-request-testing__heading-container">
			<h1 class="pull-request-testing__heading--first">Testing procedure</h1>
		</div>
		<div
			v-if="testCases.length > 0"
			class="pure-u-1 pull-request-testing__test-cases-container"
		>
			<div
				v-for="(testCase, index) in testCases"
				:key="index"
				class="pull-request-testing__test-case-container"
			>
				<h2
					class="pull-request-testing__heading--second"
					@click="toggleCollapse(index)"
				>
					Case {{ index + 1 }}
				</h2>
				<ol
					v-if="uncollapsed.includes(index)"
					class="pull-request-testing__test-case-list"
				>
					<li
						v-for="step in testCase"
						:key="step"
						class="pull-request-testing__test-case-list-entry"
						v-text="step"
					/>
				</ol>
			</div>
		</div>
		<div v-else class="pure-u-1 pull-request-testing__test-cases-container">
			<p
				v-if="currentSteps.length === 0"
			>
				You need to add a test instruction
			</p>
			<p
				v-else
				class="pull-request-testing__test-cases-container-paragraph"
			>
				Now add the test case or add more instructions
			</p>
		</div>
		<div class="pure-u-1">
			<hr class="pull-request-testing__divider" />
		</div>
		<div
			v-if="currentSteps.length > 0"
			class="pure-u-1 pull-request-testing__current-steps-container"
		>
			<ol class="pull-request-testing__current-steps-list">
				<li v-for="step in currentSteps" :key="step" v-text="step" />
			</ol>
		</div>
		<div class="pure-u-1 pull-request-testing__textarea-container">
			<textarea
				class="pull-request-testing__input"
				v-model="testInstruction"
				placeholder="Test instruction"
			/>
		</div>
		<div class="pure-g pull-request-testing__control-button-container">
			<div class="pure-u-1-2">
				<div class="pull-request-testing__control-button-container--left">
					<FirePrButton
						class="pull-request-testing-control-button--left"
						:disabled="disableAddInstruction"
						:label="'Add instruction'"
						@click="addTestStep"
						style="font-size: 15px;"
					/>
				</div>
			</div>
			<div class="pure-u-1-2">
				<div class="pull-request-testing__control-button-container--right">
					<FirePrButton
						class="pull-request-testing-control-button--right"
						:label="'Add Test Case'"
						:disabled="disableAddTestStep"
						@click="addTestCase"
						style="font-size: 15px;"
					/>
				</div>
			</div>
		</div>
		<div class="pure-u-1 pull-request-testing__button-container">
			<FirePrButton
				class="pull-request-testing__router-button--left"
				:label="'Back'"
				@click="$router.back()"
			/>
			<FirePrButton
				class="pull-request-testing__router-button--right"
				:disabled="disableNext"
				:label="'Next'"
				@click="saveTestingOptions"
			/>
		</div>
	</div>
</template>

<script>
import FirePrButton from '../components/FirePrButton.vue';

export default {
	components: {
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
		disableAddInstruction() {
			return this.testInstruction === '';
		},
	},
	mounted() {
		if (
			!(
				'testing' in this.$store.state.options &&
				this.$store.state.options.testing.length > 0
			)
		) {
			chrome.storage.sync.get(
				[`${this.$store.state.jiraIssue}-testing-options`],
				data => {
					if (data[`${this.$store.state.jiraIssue}-testing-options`]) {
						this.testCases =
							data[`${this.$store.state.jiraIssue}-testing-options`];
					}
				},
			);
		} else {
			this.testCases = this.$store.state.options.testing;
		}
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
			if (this.testInstruction === '') {
				return;
			}
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
.pull-request-testing__router-button--right {
	margin-right: 10%;
	float: right;
	display: inline;
}

.pull-request-testing__router-button--left {
	margin-left: 10%;
	float: left;
	display: inline;
}

.pull-request-testing-control-button--left {
	float: left;
	display: inline;
	font-size: 15px;
	width: 100%;
}

.pull-request-testing__control-button-container--left {
	padding-right: 10px;
	width: 100%;
}

.pull-request-testing__control-button-container--right {
	padding-left: 10px;
	width: calc(100% - 10px);
}

.pull-request-testing-control-button--right {
	float: right;
	display: inline;
	width: 100%;
}

.pull-request-testing__control-button-container {
	width: 100%;
	padding-left: 6%;
	padding-right: 6%;
	margin-top: 0.61em;
}

.pull-request-testing__textarea-container {
	padding-left: 6%;
	padding-right: 6%;
}

.pull-request-testing__current-steps-list {
	margin: 0;
	margin-bottom: 0.61em;
	margin-top: 0;
	padding-left: 6%;
}

.pull-request-testing__current-steps-container {
	padding-left: 6%;
	padding-right: 6%;
	margin: 0;
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
}

.pull-request-testing__test-cases-container-paragraph {
	margin-top: 0;
}

.pull-request-testing__test-cases-container {
	padding-left: 6%;
	padding-right: 6%;
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
	margin-bottom: 0.61em;
}

.pull-request-testing__test-case-list {
	padding-left: 7%;
	border-left: 2px solid rgba(88, 111, 124, 0.2);
	margin-left: 2%;
	margin-top: 0;
	margin-bottom: 0.2em;
}

.pull-request-testing__test-case-list
	.pull-request-testing__test-case-list-entry:first-child {
	margin-top: 0.3em;
}

.pull-request-testing__heading--second {
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
	margin-bottom: 0.61em;
	margin-bottom: 0;
}

.pull-request-testing__test-case-container
	.pull-request-testing__heading--second:first-child {
	margin-top: 0;
}

.pull-request-testing__divider {
	display: block;
	height: 1px;
	border: 0;
	border-top: 1px solid rgba(88, 111, 124, 0.5);
	margin: 1em 0;
	padding: 0;
	margin: 0;
	margin-bottom: 0.61em;
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
