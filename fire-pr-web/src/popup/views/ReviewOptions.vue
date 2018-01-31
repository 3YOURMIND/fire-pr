<template>
  <div class="main-container">
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
      :class="nextClasses"
      @click="saveMergeOptions"
      :disabled="disableNext"
    >
      Finish
    </button>
  </div>
</template>

<script>
import BackButton from '../components/BackButton.vue';

export default {
  components: {
    BackButton,
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
        'disabled': this.disableNext,
      }
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
      // this.$router.push('/finish');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
