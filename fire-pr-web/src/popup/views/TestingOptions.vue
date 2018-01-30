<template>
  <div class="testing-options__main-container">
    <h3>Testing Procedure</h3>
    <div v-for="testCase in testCases" :key="testCase.title">
      <p v-text="testCase.title" />
      <ul>
        <li
          v-for="step in testCase.steps"
          :key="step"
          v-text="step"
        />
      </ul>
    </div>
    <input type="text" v-model="testCaseTitle" placeholder="Test Case Title" />
    <textarea v-model="testCaseSteps" placeholder="Test Case Steps" />
    <button
      class="change-options__add-test-case-button"
      @click="addTestCase"
    >Add Test Case</button>
    <button
      class="change-options__next-button"
      @click="saveTestingOptions"
    >Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testCases: [],
      testCaseTitle: '',
      testCaseSteps: [],
    };
  },
  methods: {
    saveTestingOptions() {
      this.$store.dispatch('saveTestingOptions', this.testCases);
      this.$router.push('/review-merge');
    },
    addTestCase() {
      this.testCases.push({
        title: this.testCaseTitle,
        steps: this.testCaseSteps.split(/\n/),
      });
      this.testCaseTitle = '';
      this.testCaseSteps = [];
    }
  }
}
</script>

<style lang="scss" scoped>

.testing-options__main-container {
  width: 80%;
  margin: auto;
}

.change-options__add-test-case-button {
  width: 40%;
  margin: auto;
  display: block;
}

.testing-options__next-button {
  width: 40%;
  margin: auto;
  display: block;
}

</style>
