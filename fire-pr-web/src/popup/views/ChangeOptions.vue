<template>
  <div class="change-options__main-container">
    <h3>What kind of change does this PR introduce?</h3>
    <p>
      Bugfix <input type="checkbox" v-model="options.bugfix"/>
    </p>
    <p>
      Feature <input type="checkbox" v-model="options.feature"/>
    </p>
    <p>
      Code style update <input type="checkbox" v-model="options.codeStyle"/>
    </p>
    <p>
      Refactor <input type="checkbox" v-model="options.refactor"/>
    </p>
    <p>
      Build-related changes <input type="checkbox" v-model="options.build"/>
    </p>
    <p>
      Other: Please describe <input type="checkbox" v-model="options.other"/>
      <input
        type="text"
        v-if="options.other"
        v-model="options.otherDescription"
      />
    </p>
    <button
      class="change-options__next-button"
      @click="saveChangeOptions"
    >Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: {
        bugfix: false,
        feature: false,
        codeStyle: false,
        refactor: false,
        build: false,
        other: false,
        otherDescription: '',
      }
    };
  },
  methods: {
    saveChangeOptions() {
      this.$store.dispatch('saveChangeOptions', this.options);
      this.$router.push('/breaking')
    }
  }
}
</script>

<style lang="scss" scoped>

.change-options__main-container {
  width: 80%;
  margin: auto;
}

.change-options__next-button {
  width: 40%;
  margin: auto;
  display: block;
}

</style>
