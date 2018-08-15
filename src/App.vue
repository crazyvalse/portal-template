<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>
<style rel="stylesheet/scss" lang="scss">
ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}
body {
  background: rgba(245, 245, 245, 1);
}
</style>