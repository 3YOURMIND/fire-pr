<template>
  <div class="fire-app__main-container">
    <header>wow i am making things big</header>
    <input
      type="text"
      class="fire-app__title-input"
      v-model="title"
    >
    <textarea
      type="textarea"
      class="fire-app__template-input"
      v-model="prTemplate"
      rows="10"
    />
    <router-view></router-view>
    <div id="debug-div">
      <code v-text="debugInfo"/>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        title: '',
        prTemplate: this.$store.getters.prTemplate,
      };
    },
    computed: {
      debugInfo() {
        return this.$store.getters.debugInfo;
      }
    },
    mounted() {
      console.log('hello');
    }
  }
</script>

<style lang="scss" scoped>

header {
  text-align: center;
}

.fire-app__main-container {
  width: 400px;
}

.fire-app__title-input {
  margin-top: 10px;
  width: 80%;
  margin: auto;
  display: block;
}

.fire-app__template-input {
  margin-top: 10px;
  width: 80%;
  margin: auto;
  display: block;
}

</style>
