<template>
  <div class="fire-app__body-container">
    <header>
      <h4>fire-pr template</h4>
    </header>
    <input
      type="text"
      class="fire-app__title-input"
      v-model="title"
      @input="updateTitle"
    >
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
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
        const jiraIssue = branchTitle.toString().match(/B3-([0-9])*/gi)[0];
        this.$store.dispatch('saveJiraIssue', jiraIssue);
      });
    }
  }
</script>

<style lang="scss" scoped>

header {
  text-align: center;
}

.fire-app__body-container {
  width: 400px;
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
