<template>
  <el-form :model="formData" size="medium">
slot
    <el-form-item>
      <el-button type="primary" @click="$emit('search')">查询</el-button>
      <el-button @click="$emit('reset')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    formData: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
</script>

<style>

</style>
