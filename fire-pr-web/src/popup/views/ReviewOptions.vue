<template>
  <div class="breaking-options__main-container">
    <h3>Review and Merge</h3>
    <h4>Who</h4>
    <p>
      <input
        type="radio"
        name="merger"
        @click="updateMerger('last')"
      /> Last approver merges
    </p>
    <p>
      <input
        type="radio"
        name="merger"
        @click="updateMerger('creator')"
      />PR creator merges
    </p>
    <h4>When</h4>
    <p>
      <input
        type="radio"
        name="mergeTime"
        @click="updateMergeTime('half')"
      />Merge after > 51% of the reviewers approved
    </p>
    <p>
      <input
        type="radio"
        name="mergeTime"
        @click="updateMergeTime('all')"
      />Merge after 100% of the reviewers approved
    </p>
    <p>
      <input
        type="radio"
        name="mergeTime"
        @click="updateMergeTime('one')"
      />Merge after 1 reviewer approves
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
    updateMerger(merger) {
      this.options.merger = merger;
    },
    updateMergeTime(mergeTime) {
      this.options.mergeTime = mergeTime;
    },
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
