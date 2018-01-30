<template>
  <div class="welcome__main-container">
    <input type="text" class="welcome__title-input" v-model="title">
    <br>
    <textarea
      type="textarea"
      class="welcome__template-input"
      v-model="prTemplate"
      rows="10"
    />
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data () {
      return {
        title: '',
        prTemplate: this.$store.getters.prTemplate,
      };
    },
  }
</script>

<style lang="scss" scoped>
.welcome__main-container {
  width: 80%;
  margin: auto;
}

.welcome__title-input {
  margin-top: 10px;
  width: 100%;
  margin: auto;
  display: block;
}

.welcome__template-input {
  margin-top: 10px;
  width: 100%;
  margin: auto;
  display: block;
}
</style>
