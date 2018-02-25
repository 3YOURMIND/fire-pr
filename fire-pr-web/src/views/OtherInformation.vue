<template>
	<div class="pure-g other-information__container">
		<div class="pure-u-1">
			<ol v-if="informations.length > 0">
				<li
					v-for="information in informations"
					:key="information"
					v-text="information"
				/>
			</ol>
		</div>
		<div class="pure-u-1">
			<div v-if="informations.length < 1">No Information given</div>
		</div>
		<div class="pure-u-1">
			<hr />
		</div>
		<div class="pure-u-1">
			<label>Other Information Note</label>
		</div>
		<div class="pure-u-1">
			<input type="text" name="merger" v-model="text" />
		</div>
		<div class="pure-u-1">
			<button @click="addOtherInformation">Add other information</button>
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
import BackButton from '../components/BackButton.vue';
import FirePrButton from '../components/FirePrButton.vue';

export default {
	name: 'OtherInformation',
	components: {
		BackButton,
		FirePrButton,
	},
	data() {
		return {
			informations: [],
			text: '',
		};
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
.pull-request-other-information__button-container {
	position: absolute;
	bottom: 6%;
}

.other-information__container {
	font-size: 16px;
}
</style>
