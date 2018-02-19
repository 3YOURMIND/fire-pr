<template>
	<div class="pure-g pull-request-type__container">
		<div class="pure-u-1 pull-request-type__heading-container">
			<h1 class="pull-request-type__heading--first">
				Pull Request Type
			</h1>
		</div>
		<div style="padding-left: 6%; padding-right: 6%;">
			<div class="pure-u-1">
				<FirePrCheckbox :checked.sync="options.bugfix" :label="'Bugfix'" />
			</div>
			<div class="pure-u-1" style="margin-top: 0.61em;">
				<FirePrCheckbox :checked.sync="options.feature" :label="'Feature'" />
			</div>
			<div class="pure-u-1" style="margin-top: 0.61em;">
				<FirePrCheckbox :checked.sync="options.codeStyle" :label="'Code style'" />
			</div>
			<div class="pure-u-1" style="margin-top: 0.61em;">
				<FirePrCheckbox :checked.sync="options.refactor" :label="'Refactor'" />
			</div>
			<div class="pure-u-1" style="margin-top: 0.61em;">
				<FirePrCheckbox :checked.sync="options.build" :label="'Build-related changes'" />
			</div>
			<div class="pure-u-1" style="margin-top: 0.61em;">
				<FirePrCheckbox :checked.sync="options.other" :label="'Other: Please describe'" />
				<div class="pull-request-type__input-container" v-if="options.other">
					<input
						autofocus
						type="text"
						class="pull-request-type__input"
						v-model="options.otherDescription"
					/>
				</div>
			</div>
		</div>
		<div class="pure-u-1 pull-request-type__button-container">
			<FirePrButton
				:label="'Back'"
				@click="handleBackButtonClick"
				style="margin-left: 10%; float: left; display: inline;"
			/>
			<FirePrButton
				:disabled="buttonEnabled"
				:label="'Next'"
				@click="saveChangeOptions"
				style="margin-right: 10%; float: right; display: inline;"
			/>

		</div>
	</div>
</template>

<script>
import FirePrCheckbox from '../components/FirePrCheckbox.vue';
import FirePrButton from '../components/FirePrButton.vue';

export default {
	name: 'PullRequestType',
	components: {
		FirePrCheckbox,
		FirePrButton,
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
		handleBackButtonClick() {
			this.$router.push('/');
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

	&__button {
		&-container {
			position: absolute;
			bottom: 6%;
		}

		border: 0;
		background: none;
		color: #586f7c;
		font-size: 20px;
		border: 1px solid rgba(88, 111, 124, 0.5);
		padding: 0.4em 0.8em;
		border-radius: 5px;

		&:active {
			box-shadow: 0 0 3px #b8dbd9;
			outline: none;
		}

		&:focus {
			box-shadow: 0 0 3px #b8dbd9;
			outline: none;
		}

		&:target {
			outline: none;
			box-shadow: 0 0 3px #b8dbd9;
		}
	}
}
</style>
