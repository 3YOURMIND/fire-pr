<template>
	<div class="pure-g review-options__container">
		<div class="pure-u-1">
			<h3>Review and Merge</h3>
		</div>
		<div class="pure-u-1">
			<h4>Who</h4>
		</div>
		<div class="pure-u-1">
			<p>
				<input type="radio" iname="merger" @click="updateMerger('last')" />
				<label>Last approver merges</label>
			</p>
			<p>
				<input type="radio" name="merger" @click="updateMerger('creator')" />
				<label>PR creator merges</label>
			</p>
		</div>
		<div class="pure-u-1">
			<h4>When</h4>
		</div>
		<div class="pure-u-1">
			<p>
				<input type="radio" name="mergeTime" @click="updateMergeTime('half')" />
				<label>Merge after > 51% of the reviewers approved</label>
			</p>
			<p>
				<input type="radio" name="mergeTime" @click="updateMergeTime('all')" />
				<label>Merge after 100% of the reviewers approved</label>
			</p>
			<p>
				<input type="radio" name="mergeTime" @click="updateMergeTime('one')" />
				<label>Merge after 1 reviewer approves</label>
			</p>
		</div>
		<div class="pure-u-1 pull-request-review__button-container">
			<FirePrButton
				:label="'Back'"
				@click="$router.back()"
				style="margin-left: 10%; float: left; display: inline;"
			/>
			<FirePrButton
				:disabled="disableNext"
				:label="'Next'"
				@click="saveMergeOptions"
				style="margin-right: 10%; float: right; display: inline;"
			/>
		</div>
	</div>
</template>

<script>
import BackButton from '../components/BackButton.vue';
import FirePrButton from '../components/FirePrButton.vue';

export default {
	components: {
		BackButton,
		FirePrButton,
	},
	data() {
		return {
			options: {
				merger: '',
				mergeTime: '',
			},
		};
	},
	computed: {
		disableNext() {
			return this.options.merger === '' || this.options.mergeTime === '';
		},
		nextClasses() {
			return {
				'next-button': true,
				disabled: this.disableNext,
			};
		},
	},
	methods: {
		updateMerger(merger) {
			this.options.merger = merger;
		},
		updateMergeTime(mergeTime) {
			this.options.mergeTime = mergeTime;
		},
		saveMergeOptions() {
			this.$store.dispatch('saveMergeOptions', this.options);
			this.$router.push('/other-information');
		},
	},
};
</script>

<style lang="scss" scoped>
.review-options__container {
	font-size: 16px;
}

.pull-request-review__button-container {
	position: absolute;
	bottom: 6%;
}
</style>
