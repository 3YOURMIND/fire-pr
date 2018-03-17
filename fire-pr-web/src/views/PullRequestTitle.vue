<template>
	<div class="pure-g pull-request-title__container">
		<div class="pure-u-1 pull-request-title__heading-container">
			<h1 class="pull-request-title__heading--first">Pull Request Title</h1>
		</div>
		<div class="pure-u-1 pull-request-title__input-container">
			<input autofocus class="pull-request-title__input" v-model="title" />
		</div>
		<div class="pure-u-1 pull-request-title__button-container">
			<FirePrButton
				:disabled="!formValid"
				:label="'Next'"
				@click="onNextClick"
			/>
		</div>
	</div>
</template>

<script>
import FirePrButton from '../components/FirePrButton.vue';

export default {
	name: 'PullRequestTitle',
	components: {
		FirePrButton,
	},
	data() {
		return {
			title: '',
		};
	},
	computed: {
		formValid() {
			const titleGiven = this.title !== '';
			return titleGiven;
		},
	},
	mounted() {
		const storeTitle = this.$store.state.title;
		if (storeTitle === '') {
			chrome.storage.sync.get(
				[`${this.$store.state.jiraIssue}-title`],
				data => {
					if (data[`${this.$store.state.jiraIssue}-title`]) {
						this.title = data[`${this.$store.state.jiraIssue}-title`];
					}
				},
			);
		} else {
			this.title = storeTitle;
		}
	},
	methods: {
		onNextClick() {
			this.$store.dispatch('saveTitle', this.title);
			this.$router.push('/type');
		},
	},
};
</script>

<style lang="scss" scoped>
.pull-request-title {
	&__container {
		font-size: 16px;
	}

	&__heading {
		&-container {
			font-family: 'Roboto';
			margin-top: 35%;
			text-align: center;
		}

		&--first {
			color: #2f4550;
			font-weight: 300;
			margin-bottom: 0.61em;
			margin-top: 0.61em;
		}
	}

	&__input {
		background-color: #f4f4f9;
		border: 1px solid rgba(88, 111, 124, 0.5);
		border-radius: 5px;
		color: #586f7c;
		font-family: 'Roboto';
		font-size: 2em;
		font-weight: 300;
		height: 1.61em;
		padding-left: 0.375em;
		padding-right: 0.375em;
		transition: all 0.2s ease;
		width: 80%;

		&::selection {
			background: #b8dbd9;
		}

		&:focus {
			box-shadow: 0 0 3px #b8dbd9;
			outline: none;
			transition: all 0.2s ease;
		}

		&-container {
			margin-top: 1.61em;
			text-align: center;
		}
	}

	&__button-container {
		bottom: 6%;
		position: absolute;
		text-align: center;
	}
}
</style>
