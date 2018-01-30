<template>
  <div class="breaking-options__main-container">
    <h3>Does this PR introduce a breaking change?</h3>
    <p>
      Yes <input type="radio" @click="breaking = true"/>
    </p>
    <p>
      No <input type="radio" @click="breaking = false"/>
    </p>
    <button class="breaking-options__next-button">Next</button>
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
    saveChangeOptions() {
      this.store.dispatch('saveBreakingOptions', this.breaking);
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
