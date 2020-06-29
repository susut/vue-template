<template>
  <div>
    <SearchForm :form-data="formData" @search="search" @reset="reset" />
    <TableList :table-data="list" />
  </div>
</template>

<script>
import SearchForm from './components/SearchForm'
import TableList from './components/TableList'
export default {
  name: 'Index',
  components: { TableList, SearchForm },
  data() {
    return {
      formData: {},
      curPage: 1,
      pageSize: 20,
      totalNum: 0,
      list: []
    }
  },
  created() {
    this.getList();
  },
  methods: {
    async getList(options = {}) {},
    search() {
      this.curPage = 1;
      this.getList();
    },
    reset() {
      this.curPage = 1;
      this.formData = {};
      this.getList();
    }
  }
}
</script>

<style>

</style>
