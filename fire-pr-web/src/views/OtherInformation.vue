<template>
	<div class="pure-g other-information__container">
		<div class="pure-u-1">
			<BackButton />
		</div>
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
		<div class="pure-u-1">
			<button :disable="nextDisabled" @click="nextStep">
				Next
			</button>
		</div>
	</div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
	name: 'OtherInformation',
	components: {
		BackButton,
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
.other-information__container {
	font-size: 16px;
}
</style>
