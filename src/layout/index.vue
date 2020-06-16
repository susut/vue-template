<template>
<el-container class="layout-container">
  <el-aside class="nav-wrap">
    <el-menu 
      class="menu"
      :router="true" 
      mode="vertical" 
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <MenuList :menu-arr="menuArr" />
    </el-menu>
  </el-aside>
  <el-container>
    <el-header class="header-wrap">Header {{user.name}}</el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
    <el-footer class="footer-wrap">Footer</el-footer>
  </el-container>
</el-container>
</template>

<script>
import { mapState } from 'vuex';
import MenuList from './menu-list';
import menuArr from '@src/menu.config.js';
export default {
  name: 'index',
  components: {
    MenuList
  },
  computed: {
    ...mapState('global', ['user'])
  },
  data() {
    return {
      menuArr
    }
  }
}
</script>

<style lang="less" scoped>
.layout-container {
  height: 100vh;
  overflow: auto;
  .nav-wrap {
    width: 250px;
    .menu {
      height: 100%;
    }
  }
  .header-wrap {
    height: 60px;
    border-bottom: 1px solid #eee;
  }
  .footer-wrap {
    height: 60px;
    border-top: 1px solid #eee;
  }
}
</style>
