<template>
  <div id="app">
    <div id="nav">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
        <el-menu-item index="0"><router-link to="/">OMS-SIMULATOR</router-link></el-menu-item>
        <el-submenu index="1">
          <template slot="title">下行模拟器</template>
          <el-menu-item index="1-1">银行间回购</el-menu-item>
          <el-menu-item index="1-2">银行间现券</el-menu-item>
          <el-menu-item index="1-3">交易所现券</el-menu-item>
          <el-menu-item index="1-4">交易所回购</el-menu-item>
          <el-menu-item index="1-5">交易所股票</el-menu-item>
          <el-menu-item index="1-6">场外开放式基金</el-menu-item>
          <el-menu-item index="1-7">定期存款</el-menu-item>
          <el-menu-item index="1-8">债券投标</el-menu-item>
          <el-menu-item index="1-9">同业存单</el-menu-item>
          <el-menu-item index="1-10">可转债</el-menu-item>
          <el-menu-item index="1-11"><router-link to="/sefi_bond">上固收深综协</router-link></el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">上行模拟器</template>
          <el-menu-item index="2-1">银行间回购</el-menu-item>
          <el-menu-item index="2-1">银行间现券对话报价</el-menu-item>
          <el-menu-item index="2-1">银行间现券对话报价(本方客户端界面)</el-menu-item>
          <el-menu-item index="2-1">银行间现券请求报价</el-menu-item>
          <el-menu-item index="2-1">银行间现券请求报价(本方客户端界面)</el-menu-item>
          <el-menu-item index="2-1">银行间回购客户端</el-menu-item>
          <el-menu-item index="2-1">ack重发</el-menu-item>
        </el-submenu>
      </el-menu>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      activeIndex: '0'
    }
  }
}
</script>

<style lang="scss">
a {
  font-weight: bold;
  color: #2c3e50;
  &.router-link-exact-active {
    color: #42b983;
  }
}
</style>
