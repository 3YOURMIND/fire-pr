<template>
	<div class="pure-g other-information__container">
		<div class="pure-u-1 pull-request-other-information__heading-container">
			<h1 class="pull-request-other-information__heading--first">
				Other Information
			</h1>
		</div>
		<div class="pure-u-1" style="margin-bottom: 0.61em; padding-left: 6%; padding-right: 6%; font-family: 'Roboto'; font-weight: 300; color: #2f4550;">
			<ol v-if="informations.length > 0" style="padding-left: 6%; margin: 0;">
				<li
					v-for="information in informations"
					:key="information"
					v-text="information"
				/>
			</ol>
		</div>
		<div v-if="noInformationGiven" class="pure-u-1" style="margin-bottom: 0.61em; padding-left: 6%; padding-right: 6%; font-family: 'Roboto'; font-weight: 300; color: #2f4550;">
			<span>No Information given</span>
		</div>
		<div class="pure-u-1">
			<hr />
		</div>
		<div class="pure-u-1" style="margin-top: 0.61em; padding-left: 6%; padding-right: 6%; font-family: 'Roboto'; font-weight: 300; color: #2f4550;">
			<label>Other Information Note</label>
		</div>
		<div class="pure-u-1" style="margin-top: 0.61em; padding-left: 6%; padding-right: 6%; font-family: 'Roboto'; font-weight: 300; color: #2f4550;">
			<div class="pull-request-other-information__input-container">
				<input
					autofocus
					type="text"
					name="merger"
					class="pull-request-other-information__input"
					v-model="text"
				/>
			</div>
		</div>
		<div class="pure-u-1" style="margin-top: 0.61em; padding-left: 6%; padding-right: 6%; font-family: 'Roboto'; font-weight: 300; color: #2f4550;">
			<FirePrButton
				:label="'Add other information'"
				@click="addOtherInformation"
				style="width: 100%;"
			/>
		</div>
		<div class="pure-u-1 pull-request-other-information__button-container">
			<FirePrButton
				:label="'Back'"
				@click="$router.back()"
				style="margin-left: 10%; float: left; display: inline;"
			/>
			<FirePrButton
				:disabled="nextDisabled"
				:label="'Next'"
				@click="nextStep"
				style="margin-right: 10%; float: right; display: inline;"
			/>
		</div>
	</div>
</template>

<script>
import FirePrButton from '../components/FirePrButton.vue';

export default {
	name: 'PullRequestOtherInformation',
	components: {
		FirePrButton,
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
		if ('otherInformations' in this.$store.state) {
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

.pull-request-other-information__button-container {
	position: absolute;
	bottom: 6%;
}

.other-information__container {
	font-size: 16px;
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
