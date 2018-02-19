<template>
	<div class="pure-g pull-request-breaking__container">
		<div class="pure-u-1 pull-request-breaking__heading-container">
			<h1 class="pull-request-breaking__heading--first">
				Breaking changes
			</h1>
		</div>
		<div style="padding-left: 6%; padding-right: 6%;">
			<div class="pure-u-1">
				<label class="control control--radio" @click="updateBreaking(true)">
					<span>Yes</span>
					<input type="radio" name="radio" :checked="breaking"/>
					<div class="control__indicator"></div>
				</label>
				<input v-if="breaking" type="text" v-model="breakingChangeText" />
			</div>
			<div class="pure-u-1">
				<label class="control control--radio" @click="updateBreaking(false)">
					<span>No</span>
					<input type="radio" name="radio" :checked="!breaking"/>
					<div class="control__indicator"></div>
				</label>
			</div>
		</div>
		<div class="pure-u-1 pull-request-breaking__button-container">
			<FirePrButton
				:label="'Back'"
				@click="$router.back()"
				style="margin-left: 10%; float: left; display: inline;"
			/>
			<FirePrButton
				:disabled="disableNext"
				:label="'Next'"
				@click="saveBreakingOptions"
				style="margin-right: 10%; float: right; display: inline;"
			/>
		</div>
	</div>
</template>

<script>
import BackButton from '../components/BackButton.vue';
import FirePrButton from '../components/FirePrButton.vue';

export default {
	name: 'PullRequestBreaking',
	components: {
		BackButton,
		FirePrButton,
	},
	data() {
		return {
			breaking: false,
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
