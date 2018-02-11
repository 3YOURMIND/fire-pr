<template>
	<div class="pure-g pull-request-breaking__container">
		<div class="pure-u-1">
			<BackButton />
		</div>
		<div class="pure-u-1">
			<h3>Does this PR introduce a breaking change?</h3>
		</div>
		<div class="pure-u-1">
			<input type="radio" name="breaking" @click="updateBreaking(true)" />
			<label>Yes</label>
			<input v-if="breaking" type="text" v-model="breakingChangeText" />
		</div>
		<div class="pure-u-1">
			<p>
				<input type="radio" name="breaking" @click="updateBreaking(false)" />No
			</p>
		</div>
		<div class="pure-u-1">
			<button
				:class="nextClasses"
				:disabled="disableNext"
				@click="saveBreakingOptions"
			>
				Next
			</button>
		</div>
	</div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
	name: 'PullRequestBreaking',
	components: {
		BackButton,
	},
	data() {
		return {
			breaking: null,
			breakingChangeText: '',
		};
	},
	computed: {
		disableNext() {
			if (this.breaking === null) {
				return true;
			}
			if (this.breaking && this.breakingChangeText === '') {
				return true;
			}
			return false;
		},
		nextClasses() {
			return {
				'next-button': true,
				disabled: this.disableNext,
			};
		},
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
.pull-request-breaking__container {
	font-size: 16px;
}
</style>
