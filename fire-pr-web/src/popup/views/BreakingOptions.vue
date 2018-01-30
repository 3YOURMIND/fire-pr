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
      class="next-button"
      @click="saveBreakingOptions">
      Next
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      breaking: false,
    };
  },
  methods: {
    updateBreaking(breaking) {
      this.breaking = breaking;
    },
    saveBreakingOptions() {
      this.$store.dispatch('saveBreakingOptions', this.breaking);
      this.$router.push('/testing');
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
