<template>
  <div style="height: 100%" ref="echart">
    echart
  </div>
</template>

<script>
//引入echarts组件
import * as echarts from 'echarts'
export default {
  props: {
    chartData: {
      type: Object,
      default() {
        return {
          xData: [],
          series: []
        }
      }
    },
    //接收父组件传递来的信息
    isAxisChart: {
      //判断是否有坐标轴
      type: Boolean,
      default: true //有坐标轴
    }
  },
  //计算属性，通过计算属性得到最终要使用的Option
  computed: {
    options() {
      return this.isAxisChart ? this.axisOption : this.normalOption
    }
  },
  watch: {
    chartData: {
      handler: function() {
        this.initChart()
      },
      deep: true
    }
  },
  data() {
    return {
      //用来存放初始化的echart对象
      echart: null,

      //有坐标轴的配置
      axisOption: {
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisTick: { show: false }
        },
        yAxis: [
          {
            type: 'value',
            axisLine: {
              show: true,
              lineStyle: {
                color: '#17b3a3'
              }
            },
            axisTick: { show: true }
          }
        ],
        //选择每个series的颜色，从数组里面寻找渲染颜色
        color: [
          '#2ec7c9',
          '#b6a2de',
          '#5ab1ef',
          '#ffb980',
          '#d87a80',
          '#8d98b3',
          '#e5cf0d',
          '#97b552',
          '#95706d',
          '#dc69aa',
          '#07a2a4',
          '#9a7ad1',
          '#588dd5',
          '#f5994e',
          '#c05050',
          '#59678c',
          '#c9ab00',
          '#7eb00a',
          '#6f5553',
          '#c14089'
        ],
        series: []
      },

      //没有坐标轴的配置
      normalOption: {
        series: []
      }
    }
  },
  methods: {
    initChart() {
      //初始化图表之前先渲染数据
      this.initChartData()
      if (this.echart) {
        //如果容器存在
        this.echart.setOption(this.options) //存在不需要初始化，把配置还进来即可
      } else {
        //如果容器不存在
        this.echart = echarts.init(this.$refs.echart)
        this.echart.setOption(this.options)
      }
    },
    //初始化图表数据
    initChartData() {
      if (this.isAxisChart) {
        //根据图表类型，初始化图表数据
        this.axisOption.xAxis.data = this.chartData.xData
        this.axisOption.series = this.chartData.series
      } else {
        //如果没有坐标轴的图
        this.normalOption.series = this.chartData.series
      }
    }
  }
}
</script>

<style scoped></style>