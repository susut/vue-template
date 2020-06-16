<template>
  <div>
    index
    <button @click="showLoading">show loading</button>
  </div>
</template>

<script>
export default {
  name: 'index',
  methods: {
    showLoading() {
      this.$loading.show(1000);
    }
  }
}
</script>