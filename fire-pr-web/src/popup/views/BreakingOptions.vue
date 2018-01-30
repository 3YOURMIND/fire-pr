<template>
  <div class="breaking-options__main-container">
    <h3>Does this PR introduce a breaking change?</h3>
    <p>
      Yes <input type="radio" name="breaking" @click="breaking = true"/>
    </p>
    <p>
      No <input type="radio" name="breaking" @click="breaking = false"/>
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
