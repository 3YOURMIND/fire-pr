<template>
  <div class="breaking-options__main-container">
    <h3>Review and Merge</h3>
    <h4>Who</h4>
    <p>
      Last approver merges <input type="radio" name="merger" @click="options.merger = 'last'"/>
    </p>
    <p>
      PR creator merges <input type="radio" name="merger" @click="options.merger = 'creator'"/>
    </p>
    <h4>When</h4>
    <p>
      Merge after > 51% of the reviewers approved <input type="radio" name="mergeTime" @click="options.mergeTime = 'half'"/>
    </p>
    <p>
      Merge after 100% of the reviewers approved <input type="radio" name="mergeTime" @click="options.mergeTime = 'all'"/>
    </p>
    <p>
      Merge after 1 reviewer approves <input type="radio" name="mergeTime" @click="options.mergeTime = 'one'"/>
    </p>
    <button
      class="breaking-options__next-button"
      @click="saveMergeOptions">
      Next
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        merger: '',
        mergeTime: '',
      },
    };
  },
  methods: {
    saveMergeOptions() {
      this.$store.dispatch('saveMergeOptions', this.options);
      // this.$router.push('/finish');
    }
  }
}
</script>

<style lang="scss" scoped>

.brekaing-options__main-container {
  width: 80%;
  margin: auto;
}

</style>
