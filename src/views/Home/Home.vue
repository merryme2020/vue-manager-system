<template>
  <el-row class="home" :gutter="20">
    <!--  左边-->
    <el-col :span="8">
      <!--      左边上面卡片，不定高度-->
      <el-card shadow="hover">
        <div class="user">
          <!--左边：用户头像-->
          <img :src="userImg" />
          <!--右边：用户信息-->
          <div class="userinfo">
            <!--名字-->
            <p class="name">yizhan</p>
            <!--权限名字-->
            <p class="access">超级管理员</p>
          </div>
        </div>
        <div class="login-info">
          <p>上次登录时间：<span>2021-2-10</span></p>
          <p>上次登录地点：<span>北京</span></p>
          <p></p>
        </div>
      </el-card>
      <!--      左边下面卡片-->
      <el-card shadow="hover" style="height: 520px;margin-top: 20px">
        <el-table :data="tableData">
          <el-table-column show-overflow-tooltip="true" v-for="(val, key) in tableLable" :key="key" :prop="key" :label="val"></el-table-column>
        </el-table>
      </el-card>
    </el-col>

    <!--    右边-->
    <el-col :span="16">
      <div class="num">
        <el-card shadow="hover" v-for="item in countData" :key="item.name" :body-style="{ display: 'flex', padding: 0 }">
          <!--          es6语法 ${item.icon}引用变量 进行字符串拼接-->
          <i class="icon" :class="`el-icon-${item.icon}`" :style="{ background: item.color }"></i>
          <div class="detail">
            <!--            数字-->
            <p class="num">￥ {{ item.value }}</p>
            <!--            文本-->
            <p class="txt">{{ item.name }}</p>
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
  data() {
    return {
      userImg: require('../../assets/images/user.jpg'), //使用变量当src的参数，写成require模式，才能识别成一个模块
      countData: [
        {
          //图标，背景色，数字，文字
          name: '今日支付订单',
          value: '1234',
          icon: 'success', //element图标进行删选
          color: '#2ec7c9'
        },
        {
          name: '今日收藏订单',
          value: '210',
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '今日未支付订单',
          value: '1234',
          icon: 's-goods',
          color: '#5ab1ef'
        },
        {
          name: '本月支付订单',
          value: '1234',
          icon: 'success',
          color: '#2ec7c9'
        },
        {
          name: '本月收藏订单',
          value: '210',
          icon: 'star-on',
          color: '#ffb980'
        },
        {
          name: '本月未支付订单',
          value: '1234',
          icon: 's-goods',
          color: '#5ab1ef'
        }
      ],
      tableData: [],
      tableLable: {
        name: '课程',
        todayBuy: '今日购买',
        monthBuy: '本月购买',
        totalBuy: '总购买'
      }
    }
  },
  methods: {
    //定义方法获取表的数据
    getTableData() {
      //输出
      this.$http.get('/home/getData').then(res => {
        res = res.data
        this.tableData = res.data.tableData
      })
    }
  },
  created() {
    //节省dom渲染时间发送请求
    this.getTableData()
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/scss/home.scss';
</style>
