<template>
	<div class="pure-g pull-request-type__container">
		<div class="pure-u-1 pull-request-type__heading-container">
			<h1 class="pull-request-type__heading--first">Pull Request Type</h1>
		</div>
		<div class="pull-request-type__selection-container">
			<div class="pure-u-1">
				<FirePrCheckbox :checked.sync="options.bugfix" :label="'Bugfix'" />
			</div>
			<div class="pure-u-1">
				<FirePrCheckbox :checked.sync="options.feature" :label="'Feature'" />
			</div>
			<div class="pure-u-1">
				<FirePrCheckbox
					:checked.sync="options.codeStyle"
					:label="'Code style'"
				/>
			</div>
			<div class="pure-u-1">
				<FirePrCheckbox :checked.sync="options.refactor" :label="'Refactor'" />
			</div>
			<div class="pure-u-1">
				<FirePrCheckbox
					:checked.sync="options.build"
					:label="'Build-related changes'"
				/>
			</div>
			<div class="pure-u-1">
				<FirePrCheckbox
					:checked.sync="options.other"
					:label="'Other: Please describe'"
				/>
				<div v-if="options.other" class="pull-request-type__input-container">
					<input
						autofocus
						type="text"
						class="pull-request-type__input"
						v-model="options.otherDescription"
					/>
				</div>
			</div>
		</div>
		<NavigationButtonBar
			:leftLabel="'Back'"
			:rightLabel="'Next'"
			:rightDisabled="buttonEnabled"
			@leftClick="handleBackButtonClick"
			@rightClick="saveChangeOptions"
		/>
	</div>
</template>

<script>
import FirePrCheckbox from '../components/FirePrCheckbox.vue';
import NavigationButtonBar from '../components/NavigationButtonBar.vue';

export default {
	name: 'PullRequestType',
	components: {
		FirePrCheckbox,
		NavigationButtonBar,
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
	mounted() {
		const storeOptions = this.$store.state.options.change;
		if (storeOptions) {
			this.options = storeOptions;
		} else {
			chrome.storage.sync.get(
				[`${this.$store.state.jiraIssue}-change-options`],
				data => {
					if (data[`${this.$store.state.jiraIssue}-change-options`]) {
						this.options =
							data[`${this.$store.state.jiraIssue}-change-options`];
					}
				},
			);
		}
	},
	methods: {
		saveChangeOptions() {
			this.$store.dispatch('saveChangeOptions', this.options);
			this.$router.push('/breaking');
		},
		handleBackButtonClick() {
			this.$router.push('/');
		},
	},
};
</script>

<style lang="scss" scoped>
.pull-request-type__selection-container {
	padding-left: 6%;
	padding-right: 6%;
}

.pull-request-type__selection-container > div:not(:first-child) {
	margin-top: 0.61em;
}

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

.pull-request-type {
	&__input {
		&-container {
			margin-top: 0.61em;
		}

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

		&:focus {
			outline: none;
			box-shadow: 0 0 3px #b8dbd9;
		}
	}
}
</style>
