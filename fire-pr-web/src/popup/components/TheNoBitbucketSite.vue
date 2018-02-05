<template>
  <div style="height: 100vh;">
    <div class="pure-g" style="text-align: center; position: relative; top: 50%; transform: translateY(-50%);">
      <div class="pure-u-1">
        <TheBitbucketIcon style="width: 30vw"/>
      </div>
      <div class="pure-u-1" style="margin-top: 2em;">
        <h2 class="no-pull-request-view">Not in Pull Request View</h2>
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
