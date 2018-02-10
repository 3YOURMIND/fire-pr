<template>
  <div class="no-bitbucket__container">
    <div class="pure-g no-bitbucket__grid">
      <div class="pure-u-1">
        <TheBitbucketIcon class="no-bitbucket__icon" />
      </div>
      <div class="pure-u-1 no-bitbucket__heading-container">
        <h2 class="no-bitbucket__heading--second">Not in Pull Request View</h2>
      </div>
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
.no-bitbucket {
  &__container {
    height: 100vh;
  }

  &__grid {
    text-align: center;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }

  &__icon {
    width: 30vw;
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
