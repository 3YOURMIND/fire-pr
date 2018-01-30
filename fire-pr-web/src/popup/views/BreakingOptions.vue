<template>
  <div class="breaking-options__main-container">
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
      class="breaking-options__next-button"
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

.brekaing-options__main-container {
  width: 80%;
  margin: auto;
}

</style>
