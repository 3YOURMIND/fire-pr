<template>
  <div>
    <p>🔥 wow amazing</p>
    <input type="text" v-model="msg">
    {{ msg }}
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  p {
    font-size: 20px;
  }
</style>
