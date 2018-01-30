<template>
  <div class="main-container">
    <header>fire-pr i changed something</header>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    }
  }
</script>

<style lang="scss" scoped>

header {
  text-align: center;
}

.main-container {
  min-height: 400px;
  min-width: 400px;
}

</style>
