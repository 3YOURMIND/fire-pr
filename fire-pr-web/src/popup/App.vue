<template>
  <div style="height: 100vh;">
    <div v-if="isLoading">
      Loading...
    </div>
    <div v-else-if="!bitbucketPullRequestView" style="height: 100vh;">
      <div class="pure-g" style="text-align: center; position: relative; top: 50%; transform: translateY(-50%);">
        <div class="pure-u-1">
          <TheBitbucketIcon style="width: 30vw"/>
        </div>
        <div class="pure-u-1" style="margin-top: 2em;">
          <h2 class="no-pull-request-view">Not in Pull Request View</h2>
        </div>
      </div>
    </div>
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
import TheBitbucketIcon from './components/TheBitbucketIcon.vue';
import FirePrCore from 'fire-pr-core';

export default {
  components: {
    TheBitbucketIcon,
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
