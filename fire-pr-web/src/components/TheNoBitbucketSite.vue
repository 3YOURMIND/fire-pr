<template>
	<div class="pure-g no-bitbucket__container">
		<div class="pure-u-1" style="text-align: center; margin-top: 35%;">
			<TheBitbucketIcon class="no-bitbucket__icon" />
		</div>
		<div class="pure-u-1 no-bitbucket__heading-container" style="text-align: center;">
			<h2 class="no-bitbucket__heading--second">Not in Pull Request View</h2>
		</div>
	</div>
</template>

<script>
import TheBitbucketIcon from './TheBitbucketIcon.vue';

export default {
	name: 'TheNoBitbucketSite',
	components: {
		TheBitbucketIcon,
	},
};
</script>

<style lang="scss" scoped>
.no-bitbucket__container {
	font-size: 16px;
}

.no-bitbucket {
	&__icon {
		width: 30%;
		margin: auto;
	}

	&__heading-container {
		margin-top: 2em;
	}

	&__heading--second {
		font-family: 'Roboto';
		font-weight: 300;
		font-size: 2em;
		letter-spacing: 0;
	}
}
</style>
