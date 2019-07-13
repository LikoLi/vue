<template>
  <div id="app">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item index="1"><router-link to="/">Liko's you blog</router-link></el-menu-item>
      <el-menu-item index="2"><router-link to="/about">关于我</router-link></el-menu-item>
    </el-menu>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      activeIndex: '1'
    }
  }
}
</script>

<style>

</style>
