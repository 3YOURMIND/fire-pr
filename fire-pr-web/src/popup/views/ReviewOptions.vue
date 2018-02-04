<template>
  <div class="main-container">
    <BackButton />
    <h3>Review and Merge</h3>
    <h4>Who</h4>
    <p>
      <input type="radio" name="merger" @click="updateMerger('last')" />
      <label>Last approver merges</label>
    </p>
    <p>
      <input type="radio" name="merger" @click="updateMerger('creator')" />
      <label>PR creator merges</label>
    </p>
    <h4>When</h4>
    <p>
      <input type="radio" name="mergeTime" @click="updateMergeTime('half')" />
      <label>Merge after > 51% of the reviewers approved</label>
    </p>
    <p>
      <input type="radio" name="mergeTime" @click="updateMergeTime('all')" />
      <label>Merge after 100% of the reviewers approved</label>
    </p>
    <p>
      <input type="radio" name="mergeTime" @click="updateMergeTime('one')" />
      <label>Merge after 1 reviewer approves</label>
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
import PrTitleUtility from '../util/pr-title';
import PrTypeUtility from '../util/pr-type';
import PrBreakingUtility from '../util/pr-breaking';
import PrTestingUtility from '../util/pr-testing';
import PrMergerUtility from '../util/pr-merger';

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
      const title = this.$store.state.title;
      if (title === '') {
        return true;
      }
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
    createTypeMarkdown() {
      const options = this.$store.state.options.change;
      PrTypeUtility.initialize([
        {
          checked: options.bugfix,
          label: 'Bugfix',
          description: {
            enabled: false,
            prefix: null,
          },
        },
        {
          checked: options.feature,
          label: 'Feature',
          description: {
            enabled: false,
            prefix: null,
          },
        },
        {
          checked: options.codeStyle,
          label: 'Code style update',
          description: {
            enabled: false,
            prefix: null,
          },
        },
        {
          checked: options.refactor,
          label: 'Refactor',
          description: {
            enabled: false,
            prefix: null,
          },
        },
        {
          checked: options.build,
          label: 'Build-related changes',
          description: {
            enabled: false,
            prefix: null,
          },
        },
        {
          checked: options.other,
          label: 'Other',
          description: {
            enabled: true,
            prefix: ', please describe',
          },
        },
      ]);
      const typePayload = {};
      if (options.other) {
        typePayload.Other = options.otherDescription;
      }
      return PrTypeUtility.renderMarkdown(typePayload);
    },
    createBreakingChangeMarkdown() {
      const { breaking, text } = this.$store.state.options.breaking;
      const breakingChangePayload = {
        exists: breaking,
        description: text,
      };
      return PrBreakingUtility.renderMarkdown(breakingChangePayload);
    },
    createTestingMarkdown() {
      const testSteps = this.$store.state.options.testing;
      return PrTestingUtility.renderMarkdown(testSteps);
    },
    createMergerMarkdown() {
      const storeMerge = this.$store.state.options.merge;
      const payload = {
        merger: storeMerge.merger,
        mergeTime: storeMerge.mergeTime,
      };
      return PrMergerUtility.renderMarkdown(payload);
    },
    saveMergeOptions() {
      this.$store.dispatch('saveMergeOptions', this.options);
      const calculatedTitle = PrTitleUtility.renderMarkdown({heading: this.$store.state.title, issueNumber: this.$store.state.jiraIssue});
      let scriptToExecute = `document.getElementById('id_title').value = '${calculatedTitle}'`;
      chrome.tabs.executeScript({
        code: scriptToExecute,
      });
      const splitter = '\n\n---\n\n';
      const typeMarkdown = this.createTypeMarkdown();
      const breakingMarkdown = this.createBreakingChangeMarkdown();
      const testingMarkdown = this.createTestingMarkdown();
      const mergerMarkdown = this.createMergerMarkdown();
      const markdown = `${typeMarkdown}${splitter}${breakingMarkdown}${splitter}${testingMarkdown}${splitter}${mergerMarkdown}`;
      scriptToExecute = `document.getElementById('id_description').value = \`${markdown}\``;
      chrome.tabs.executeScript({
        code: scriptToExecute,
      });
      scriptToExecute = `document.getElementById('id_close_anchor_branch').checked = true`;
      chrome.tabs.executeScript({
        code: scriptToExecute,
      });
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
