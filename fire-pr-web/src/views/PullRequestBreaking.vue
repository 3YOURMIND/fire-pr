<template>
	<div class="pure-g pull-request-breaking__container">
		<div class="pure-u-1 pull-request-breaking__heading-container">
			<h1 class="pull-request-breaking__heading--first">Breaking changes</h1>
		</div>
		<div class="pull-request-breaking__selection-container">
			<BooleanRadioButtonGroup :checked.sync="breaking" />
			<div class="pure-u-1" v-if="breaking">
				<div class="pull-request-breaking__input-container">
					<input
						autofocus
						type="text"
						class="pull-request-breaking__input"
						v-model="breakingChangeText"
					/>
				</div>
			</div>
		</div>
		<NavigationButtonBar
			:leftLabel="'Back'"
			:rightLabel="'Next'"
			:rightDisabled="disableNext"
			@leftClick="onBackClick"
			@rightClick="saveBreakingOptions"
		/>
	</div>
</template>

<script>
import BooleanRadioButtonGroup from '../components/BooleanRadioButtonGroup.vue';
import NavigationButtonBar from '../components/NavigationButtonBar.vue';

export default {
	name: 'PullRequestBreaking',
	components: {
		BooleanRadioButtonGroup,
		NavigationButtonBar,
	},
	data() {
		return {
			breaking: false,
			breakingChangeText: '',
		};
	},
	computed: {
		disableNext() {
			return this.breaking && this.breakingChangeText === '';
		},
		nextClasses() {
			return {
				'next-button': true,
				disabled: this.disableNext,
			};
		},
	},
	mounted() {
		this.tryLoadingCachedData();
	},
	methods: {
		tryLoadingCachedData() {
			const storeOptions = this.$store.state.options;
			const vuexStateGiven = 'breaking' in storeOptions;
			if (vuexStateGiven) {
				this.updateStateByStoreOptions(storeOptions.breaking);
			} else {
				this.updateStateByExtensionStorage();
			}
		},
		updateStateByStoreOptions({ breaking, text }) {
			this.breaking = breaking;
			this.breakingChangeText = text;
		},
		updateStateByExtensionStorage() {
			const breakingOptionsKey = `${
				this.$store.state.jiraIssue
			}-breaking-options`;
			chrome.storage.sync.get(breakingOptionsKey, data => {
				const breakingOptions = data[breakingOptionsKey];
				if (breakingOptions) {
					this.updateStateByStoreOptions(breakingOptions);
				}
			});
		},
		onBackClick() {
			this.$router.back();
		},
		saveBreakingOptions() {
			this.$store.dispatch('saveBreakingOptions', {
				breaking: this.breaking,
				text: this.breakingChangeText,
			});
			this.$router.push('/testing');
		},
	},
};
</script>

<style lang="scss" scoped>
.pull-request-breaking__selection-container {
	padding-left: 6%;
	padding-right: 6%;
	margin-top: 0.61em;
	width: 100%;
}

.pull-request-breaking {
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

.pull-request-breaking__heading--first {
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
	margin-top: 0.61em;
	margin-bottom: 0.61em;
}

.pull-request-breaking__heading-container {
	text-align: center;
}

.pull-request-breaking__container {
	font-size: 16px;
}
</style>
