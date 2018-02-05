<template>
  <div style="height: 100vh;">
    <div v-if="isLoading">
      Loading...
    </div>
    <TheNoBitbucketSite v-else-if="!bitbucketPullRequestView" />
    <div v-else>
      <h4>fire-pr template</h4>
      <input
        type="text"
        class="fire-app__title-input"
        v-model="title"
        @input="updateTitle"
      >
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import TheNoBitbucketSite from './components/TheNoBitbucketSite.vue';
import FirePrCore from 'fire-pr-core';

export default {
  components: {
    TheNoBitbucketSite,
  },
  data () {
    return {
      title: '',
      bitbucketPullRequestView: false,
      isLoading: true,
    };
  },
  methods: {
    updateTitle() {
      this.$store.dispatch('saveTitle', this.title);
    },
  },
  mounted() {
    const scriptToExecute = `document.getElementById('id_description').style.height = '500px'`;
    chrome.tabs.executeScript({
      code: scriptToExecute,
    });

    function getSelectedBranch() {
      const selectBox = document.querySelector('#id_source_group > div.branch-field-container > select');
      return selectBox.options[selectBox.selectedIndex].text;
    }
    chrome.tabs.executeScript({
      code: '(' + getSelectedBranch + ')();',
    }, (branchTitle) => {
      this.isLoading = false;
      const jiraIssue = branchTitle.toString().match(/B3-([0-9])*/gi)[0];
      this.$store.dispatch('saveJiraIssue', jiraIssue);
      this.bitbucketPullRequestView = true;
    });
  },
};
</script>

<style lang="scss" scoped>
@import '../../node_modules/purecss/build/pure.css';
@import '../../node_modules/purecss/build/grids.css';
@import './assets/css/fonts.css';

.no-pull-request-view {
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 2em;
  letter-spacing: 0;
}

h4 {
  font-family: 'Roboto';
}

header {
  text-align: center;
}

.fire-app__title-input {
  margin-top: 10px;
  width: 80%;
  margin: auto;
  display: block;
}

.main-container {
  width: 80%;
  margin: auto;
}

</style>
