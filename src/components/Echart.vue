<template>
  <!--  通过ref找到dom-->
  <div style="height: 100%" ref="echart">
    echart
  </div>
</template>

<script>
export default {
  props: {
    // chartData由父组件传递进来
    chartData: {
      type: Object,
      default() {
        //设置对象默认值
        return {
          xData: [], //类目轴
          series: [] //y轴中的数据是通过series里面的data动态渲染出来的
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
        legend: {
          textStyle: {
            color: '#333'
          }
        },
        grid: {
          left: '20%'
        },
        tooltip: {
          trigger: 'axis'
        },
        xAxis: {
          type: 'category',
          data: [],
          axisLine: {
            lineStyle: {
              color: '#17b3a3'
            }
          },
          axisLabel: {
            color: '#333'
          },
          axisTick: {
            show: false
          }
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
        tooltip: {
          trigger: 'item'
        },
        color: ['#0f78f4', '#dd536b', '#9462e5', '#a6a6a6', '#e1bb22', '#39c362', '#3ed1cf'],
        series: []
      }
    }
  },
  //定义方法渲染图表
  methods: {
    initChart() {
      //初始化图表之前先渲染数据
      this.initChartData()
      if (this.echart) {
        //如果容器存在
        this.echart.setOption(this.options) //存在不需要初始化，把配置还进来即可
      } else {
        //如果容器不存在
        this.echart = this.$echarts.init(this.$refs.echart) //取到组件进行初始化
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
