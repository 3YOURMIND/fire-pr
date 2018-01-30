<template>
  <div class="main-container">
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
    <input
      class="testing-options__test-case-title"
      type="text"
      v-model="testCaseTitle"
      placeholder="Test Case Title"
    />
    <textarea
      class="testing-options__test-case-steps"
      v-model="testCaseSteps"
      placeholder="Test Case Steps"
    />
    <button
      class="testing-options__add-test-case-button"
      @click="addTestCase"
    >Add Test Case</button>
    <button
      :class="nextClasses"
      @click="saveTestingOptions"
      :disabled="disableNext"
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
  computed: {
    disableNext() {
      return this.testCases.length < 1;
    },
    nextClasses() {
      return {
        'next-button': true,
        'disabled': this.disableNext,
      }
    }
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

.testing-options__test-case-title {
  width: 100%;
}

.testing-options__test-case-steps {
  width: 100%;
}

.testing-options__add-test-case-button {
  width: 40%;
  margin: auto;
  display: block;
}

</style>
