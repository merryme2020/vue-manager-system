<template>
  <el-container style="height: 100%">
    <el-aside width="200px"><common-aside></common-aside></el-aside>
    <el-container>
      <el-header><common-header></common-header></el-header>
      <common-tab></common-tab>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
// 引入组件
import CommonHeader from '../components/CommonHeader'
import CommonAside from '../components/commonAside'
import CommonTab from '../components/CommonTab'
export default {
  // 注册组件
  components: {
    CommonHeader,
    CommonAside,
    CommonTab
  }
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #333;
}
</style>
