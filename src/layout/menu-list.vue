<template>
  <div class="menu-list-wrap">
    <template v-for="menu in menuArr">
      <el-submenu
        v-if="menu.children && menu.children.length"
        :index="menu.name"
        :key="menu.name"
      >
        <template slot="title">
          <i v-if="menu.icon" class="base-icon" :class="menu.icon"></i>
          {{ menu.title }}
        </template>
        <menu-list :menu-arr="menu.children"></menu-list>
      </el-submenu>

      <template v-else>
        <el-menu-item v-if="menu.targetType" :key="menu.name">
          <el-link
            class="block-link"
            :underline="false"
            :href="menu.path"
            target="_blank"
          >
            <i v-if="menu.icon" class="base-icon" :class="menu.icon"></i>
            {{ menu.title }}
          </el-link>
        </el-menu-item>

        <el-menu-item v-else :index="menu.name" :key="menu.name">
          <i v-if="menu.icon" class="base-icon" :class="menu.icon"></i>
          <router-link :to="{ path: menu.path }">
            {{ menu.title }}
          </router-link>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'menu-list',
  props: ['menuArr'],
  data() {
    return {};
  },
  methods: {
  }
};
</script>

<style scoped lang="less">

</style>
