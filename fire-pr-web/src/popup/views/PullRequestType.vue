<template>
  <div class="main-container">
    <h3>What kind of change does this PR introduce?</h3>
    <p>
      <input type="checkbox" v-model="options.bugfix" />
      <label>Bugfix</label>
    </p>
    <p>
      <input type="checkbox" v-model="options.feature" />
      <label>Feature</label>
    </p>
    <p>
      <input type="checkbox" v-model="options.codeStyle" />
      <label>Code style update</label>
    </p>
    <p>
      <input type="checkbox" v-model="options.refactor" />
      <label>Refactor</label>
    </p>
    <p>
      <input type="checkbox" v-model="options.build" />
      <label>Build-related changes</label>
    </p>
    <p>
      <input type="checkbox" v-model="options.other" />
      <label>Other: Please describe</label>
      <input
        type="text"
        v-if="options.other"
        v-model="options.otherDescription"
      />
    </p>
    <button :disabled="buttonEnabled" @click="saveChangeOptions">
      Next
    </button>
  </div>
</template>

<script>
export default {
  name: 'PullRequestType',
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
      },
    };
  },
  computed: {
    buttonEnabled() {
      if (this.options.other && this.options.otherDescription !== '') {
        return false;
      }
      if (
        this.options.build ||
        this.options.refactor ||
        this.options.codeStyle ||
        this.options.feature ||
        this.options.bugfix
      ) {
        return false;
      }
      return true;
    },
  },
  methods: {
    saveChangeOptions() {
      this.$store.dispatch('saveChangeOptions', this.options);
      this.$router.push('/breaking');
    },
  },
};
</script>
