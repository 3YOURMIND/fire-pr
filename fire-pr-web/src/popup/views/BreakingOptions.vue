<template>
  <div class="main-container">
    <h3>Does this PR introduce a breaking change?</h3>
    <p>
      <input
        type="radio"
        name="breaking"
        @click="updateBreaking(true)"
      />Yes
    </p>
    <p>
      <input
        type="radio"
        name="breaking"
        @click="updateBreaking(false)"
      />No
    </p>
    <button
      :class="nextClasses"
      @click="saveBreakingOptions"
      :disabled="disableNext"
    >
      Next
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breaking: null,
    };
  },
  computed: {
    disableNext() {
      return this.breaking === null;
    },
    nextClasses() {
      return {
        'next-button': true,
        'disabled': this.disableNext,
      }
    }
  },
  methods: {
    updateBreaking(breaking) {
      this.breaking = breaking;
    },
    saveBreakingOptions() {
      this.$store.dispatch('saveBreakingOptions', this.breaking);
      this.$router.push('/testing');
    },
  },
}
</script>

<style lang="scss" scoped>

</style>
