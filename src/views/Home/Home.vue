<template>
  <el-row class="home" :gutter="20">
    <!--  左边-->
    <el-col :span="8">
      <!--      左边上面卡片-->
      <el-card shadow="hover" style="height: 290px">
        鼠标悬浮时显示
      </el-card>
      <!--      右边上面卡片-->
      <el-card shadow="hover" style="height: 520px;margin-top: 20px">
        鼠标悬浮时显示
      </el-card>
    </el-col>
    <!--    右边-->
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in 6" :key="item">
          <i class="icon"></i>
          <div class="detail">
            <!--            数字-->
            <p class="num">￥ 1234</p>
            <!--            文本-->
            <p class="txt">今日支付订单</p>
          </div>
        </el-card>
      </div>
      <el-card shadow="hover">
        <div style="height: 280px"></div>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <div style="height: 260px"></div>
        </el-card>
        <el-card shadow="hover">
          <div style="height: 260px"></div>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  mounted() {
    //输出
    this.$http.get('/home/getData').then(res => {
      console.log(res.data)
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/home.scss';
</style>
