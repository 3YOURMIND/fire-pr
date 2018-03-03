<template>
	<div class="pure-g pull-request-breaking__container">
		<div class="pure-u-1 pull-request-breaking__heading-container">
			<h1 class="pull-request-breaking__heading--first">Breaking changes</h1>
		</div>
		<div class="pull-request-breaking__selection-container">
			<div class="pure-u-1">
				<RadioButton
					:checked="!breaking"
					:label="'No'"
					:name="'radio'"
					@click="updateBreaking(false)"
				/>
			</div>
			<div class="pure-u-1">
				<RadioButton
					:checked="breaking"
					:label="'Yes'"
					:name="'radio'"
					@click="updateBreaking(true)"
				/>
			</div>
			<div class="pure-u-1">
				<div class="pull-request-breaking__input-container" v-if="breaking">
					<input
						autofocus
						type="text"
						class="pull-request-breaking__input"
						v-model="breakingChangeText"
					/>
				</div>
			</div>
		</div>
		<div class="pure-u-1 pull-request-breaking__button-container">
			<FirePrButton
				class="pull-request-breaking__button--left"
				:label="'Back'"
				@click="$router.back()"
			/>
			<FirePrButton
				class="pull-request-breaking__button--right"
				:disabled="disableNext"
				:label="'Next'"
				@click="saveBreakingOptions"
			/>
		</div>
	</div>
</template>

<script>
import BackButton from '../components/BackButton.vue';
import FirePrButton from '../components/FirePrButton.vue';
import RadioButton from '../components/RadioButton.vue';

export default {
	name: 'PullRequestBreaking',
	components: {
		BackButton,
		FirePrButton,
		RadioButton,
	},
	data() {
		return {
			breaking: false,
			breakingChangeText: '',
		};
	},
	computed: {
		disableNext() {
			return (
				this.breaking === null ||
				(this.breaking && this.breakingChangeText === '')
			);
		},
		nextClasses() {
			return {
				'next-button': true,
				disabled: this.disableNext,
			};
		},
	},
	mounted() {
		const storeOptions = this.$store.state.options;
		if ('breaking' in storeOptions) {
			const { breaking, text } = storeOptions.breaking;
			this.breaking = breaking;
			this.breakingChangeText = text;
		}
	},
	methods: {
		updateBreaking(breaking) {
			this.breaking = breaking;
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
.pull-request-breaking__button--left {
	margin-left: 10%;
	float: left;
	display: inline;
}

.pull-request-breaking__button--right {
	margin-right: 10%;
	float: right;
	display: inline;
}

.pull-request-breaking__selection-container {
	padding-left: 6%;
	padding-right: 6%;
	margin-top: 0.61em;
	width: 100%;

	& > div:nth-child(n + 2) {
		margin-top: 0.5em;
	}
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

.pull-request-breaking__button-container {
	position: absolute;
	bottom: 6%;
}
</style>
