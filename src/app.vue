<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import imgPath from './assets/img/img1.jpg';
export default {
  name: 'app',
  data() {
    return {
      hello: 'Emmmm',
      imgPath
    }
  },
  mounted() {
    this.log();
  },
  methods: {
    log() {
      console.log([...[1,2]]);
    }
  }
}
</script>

<style lang="less" scoped>
@import '~@style/normalize.css';
</style>