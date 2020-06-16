<template>
  <el-container>
  <el-aside width="200px">Aside</el-aside>
  <el-container>
    <el-header>Header {{user.name}}</el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer>Footer</el-footer>
  </el-container>
</el-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'index',
  computed: {
    ...mapState('global', ['user'])
  }
}
</script>

<style lang="less" scoped>

</style>