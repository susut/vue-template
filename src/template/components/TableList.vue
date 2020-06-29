<template>
  <el-table
    :data="tableData">
slot
  </el-table>
</template>

<script>
export default {
  name: 'TableList',
  props: {
    tableData: {
      type: Array,
      default() {
        return []
      }
    }
  }
}
</script>

<style>

</style>
