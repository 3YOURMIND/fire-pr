<template>
  <div class="fire-app__body-container">
    <header>
      <h4>fire-pr template</h4>
    </header>
    <input
      type="text"
      class="fire-app__title-input"
      v-model="title"
    >
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
      };
    },
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

.fire-app__template-input {
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
