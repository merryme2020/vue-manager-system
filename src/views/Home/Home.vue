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
          <el-table-column show-overflow-tooltip v-for="(val, key) in tableLable" :key="key" :prop="key" :label="val"></el-table-column>
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
        <echart style="height: 280px" :chartData="echartData.order"></echart>
      </el-card>
      <div class="graph">
        <el-card shadow="hover">
          <echart style="height: 280px"></echart>
        </el-card>
        <el-card shadow="hover">
          <echart style="height: 280px"></echart>
        </el-card>
      </div>
    </el-col>
  </el-row>
</template>

<script>
// 引入Echart组件
import Echart from '../../components/Echart'
export default {
  //注册Echart组件
  components: {
    Echart
  },
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
      },
      echartData: {
        order: {
          xData: [],
          series: []
        },
        user: {
          xData: [],
          series: []
        },
        video: {
          series: []
        }
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
        // console.log(res.data)
        //订单折线图
        const order = res.data.orderData //取出orderData数据保存到变量中
        //处理X轴数据
        this.echartData.order.xData = order.date
        console.log(this.echartData.order.xData)
        //第一步取出series中的name部分-键名
        let keyArray = Object.keys(order.data[0])
        // console.log(keyArray)
        //第二步循环键名的数组(keyArray),通过map()把对应的data返回
        keyArray.forEach(key => {
          this.echartData.order.series.push({
            name: key === 'wechat' ? '小程序' : key, //处理
            data: order.data.map(item => item[key]), // 取出这个item键名对应的值，放入数组中
            type: 'line' //折线图
          })
        })
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
