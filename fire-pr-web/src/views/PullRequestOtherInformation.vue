<template>
	<div class="pure-g other-information__container">
		<div class="pure-u-1 pull-request-other-information__heading-container">
			<h1 class="pull-request-other-information__heading--first">
				Other Information
			</h1>
		</div>
		<div class="pure-u-1 pull-request-other-information__list-container">
			<ol v-if="informations.length > 0" class="pull-request-other-information__list">
				<li
					v-for="information in informations"
					:key="information"
					v-text="information"
				/>
			</ol>
		</div>
		<div v-if="noInformationGiven" class="pure-u-1 pull-request-other-information__warning-container">
			<span>No Information given</span>
		</div>
		<div class="pure-u-1">
			<hr />
		</div>
		<div class="pure-u-1 pull-request-other-information__label-container">
			<label>Other Information Note</label>
		</div>
		<div class="pure-u-1 pull-request-other-information__input-container">
			<input
				autofocus
				type="text"
				name="merger"
				class="pull-request-other-information__input"
				v-model="text"
			/>
		</div>
		<div class="pure-u-1 pull-request-other-information__add-button-container">
			<FirePrButton
				class="pull-request-other-information__add-button"
				:label="'Add other information'"
				@click="addOtherInformation"
			/>
		</div>
		<NavigationButtonBar
			:leftLabel="'Back'"
			:rightLabel="'Next'"
			@leftClick="$router.back()"
			@rightClick="nextStep"
		/>
	</div>
</template>

<script>
import FirePrButton from '../components/FirePrButton.vue';
import NavigationButtonBar from '../components/NavigationButtonBar.vue';

export default {
	name: 'PullRequestOtherInformation',
	components: {
		FirePrButton,
		NavigationButtonBar,
	},
	data() {
		return {
			informations: [],
			text: '',
		};
	},
	computed: {
		noInformationGiven() {
			return this.informations.length < 1;
		},
	},
	mounted() {
		if (this.$store.state.otherInformations.length === 0) {
			chrome.storage.sync.get(
				[`${this.$store.state.jiraIssue}-other-informations`],
				data => {
					if (data[`${this.$store.state.jiraIssue}-other-informations`]) {
						this.informations =
							data[`${this.$store.state.jiraIssue}-other-informations`];
					}
				},
			);
		} else {
			this.informations = this.$store.state.otherInformations;
		}
	},
	methods: {
		addOtherInformation() {
			this.informations.push(this.text);
			this.text = '';
		},
		nextStep() {
			this.$store.dispatch('saveOtherInformations', this.informations);
			this.$router.push('/changelog');
		},
	},
};
</script>

<style lang="scss" scoped>
.pull-request-other-information__add-button {
	width: 100%;
}

.pull-request-other-information__add-button-container {
	margin-top: 0.61em;
	padding-left: 6%;
	padding-right: 6%;
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
}

.pull-request-other-information__label-container {
	margin-top: 0.61em;
	padding-left: 6%;
	padding-right: 6%;
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
}

.pull-request-other-information__warning-container {
	margin-bottom: 0.61em;
	padding-left: 6%;
	padding-right: 6%;
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
}

.pull-request-other-information__list {
	padding-left: 6%;
	margin: 0;
}

.pull-request-other-information__list-container {
	margin-bottom: 0.61em;
	padding-left: 6%;
	padding-right: 6%;
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
}

.pull-request-other-information__heading-container {
	text-align: center;
}

.pull-request-other-information__heading--first {
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
	margin-top: 0.61em;
	margin-bottom: 0.61em;
}

.other-information__container {
	font-size: 16px;
}

.pull-request-other-information__input-container {
	margin-top: 0.61em;
	padding-left: 6%;
	padding-right: 6%;
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
}

.pull-request-other-information__input {
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
</style>
