<template>
	<div class="pure-g review-options__container">
		<div class="pure-u-1 pull-request-review__heading-container">
			<h1 class="pull-request-review__heading--first">Review and Merge</h1>
		</div>
		<div class="pure-u-1" style="padding-left: 6%; padding-right: 6%; font-family: 'Roboto'; font-weight: 300; color: #2f4550;">
			<h2 class="pull-request-review__heading--second">Who should merge?</h2>
		</div>
		<div class="pure-u-1" style="padding-left: 6%; padding-right: 6%; font-family: 'Roboto'; font-weight: 300; color: #2f4550;">
			<label class="control control--radio" @click="updateMerger('last')">
				<span>Last approver merges</span>
				<input type="radio" name="merger" :checked="options.merger === 'last'"/>
				<div class="control__indicator" />
			</label>
			<label class="control control--radio" @click="updateMerger('creator')">
				<span>PR creator merges</span>
				<input type="radio" name="merger" :checked="options.merger === 'creator'"/>
				<div class="control__indicator" />
			</label>
		</div>
		<div class="pure-u-1" style="padding-left: 6%; padding-right: 6%; font-family: 'Roboto'; font-weight: 300; color: #2f4550;">
			<h2 class="pull-request-review__heading--second">
				When should the merge happen?
			</h2>
		</div>
		<div class="pure-u-1" style="padding-left: 6%; padding-right: 6%; font-family: 'Roboto'; font-weight: 300; color: #2f4550;">
			<label class="control control--radio" @click="updateMergeTime('half')">
				<span>Merge after > 51% of the reviewers approved</span>
				<input type="radio" name="mergeTime" :checked="options.mergeTime === 'half'"/>
				<div class="control__indicator" />
			</label>
			<label class="control control--radio" @click="updateMergeTime('all')">
				<span>Merge after 100% of the reviewers approved</span>
				<input type="radio" name="mergeTime" :checked="options.mergeTime === 'all'"/>
				<div class="control__indicator" />
			</label>
			<label class="control control--radio" @click="updateMergeTime('one')">
				<span>Merge after 1 reviewer approves</span>
				<input type="radio" name="mergeTime" :checked="options.mergeTime === 'one'"/>
				<div class="control__indicator" />
			</label>
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
	mounted() {
		if ('merge' in this.$store.state.options) {
			this.options.merger = this.$store.state.options.merge.merger;
			this.options.mergeTime = this.$store.state.options.merge.mergeTime;
		}
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
.pull-request-review__heading-container {
	text-align: center;
}

.pull-request-review__heading--first {
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
	margin-top: 0.61em;
	margin-bottom: 0.61em;
}

.pull-request-review__heading--second {
	font-family: 'Roboto';
	font-weight: 300;
	color: #2f4550;
	margin-top: 0.61em;
	margin-bottom: 0.61em;
}

.review-options__container {
	font-size: 16px;
}

.pull-request-review__button-container {
	position: absolute;
	bottom: 6%;
}

.control {
	display: block;
	position: relative;
	padding-left: 30px;
	margin-bottom: 15px;
	cursor: pointer;
	font-size: 18px;
}
.control input {
	position: absolute;
	z-index: -1;
	opacity: 0;
}
.control__indicator {
	position: absolute;
	top: 2px;
	left: 0;
	height: 20px;
	width: 20px;
	background: rgb(244, 244, 249);
	border: 1px solid rgba(47, 69, 80, 0.1);
}
.control--radio .control__indicator {
	border-radius: 50%;
}
.control:hover input ~ .control__indicator,
.control input:focus ~ .control__indicator {
	background: rgb(244, 244, 249);
}
.control input:checked ~ .control__indicator {
	background: rgba(47, 69, 80, 0.5);
}
.control__indicator:after {
	content: '';
	position: absolute;
	display: none;
}
.control input:checked ~ .control__indicator:after {
	display: block;
}
.control--radio .control__indicator:after {
	$size: 16px;
	left: calc(50% - (#{$size} / 2));
	top: calc(50% - (#{$size} / 2));
	height: $size;
	width: $size;
	border-radius: 50%;
	background-color: #f4f4f9;
}
.control--radio input:disabled ~ .control__indicator:after {
	background: #7b7b7b;
}
</style>
