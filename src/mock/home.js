import Mock from 'mockjs'

//图表数据
// let List = []
export default {
  getStatisticalData: () => {
    // for (let i = 0; i < 7; i++) {
    //   List.push(
    //     Mock.mock({
    //       vue: Mock.Random.float(100, 8000, 0, 2),
    //       wechat: Mock.Random.float(100, 8000, 0, 2),
    //       ES6: Mock.Random.float(100, 8000, 0, 2),
    //       Redis: Mock.Random.float(100, 8000, 0, 2),
    //       React: Mock.Random.float(100, 8000, 0, 2),
    //       springboot: Mock.Random.float(100, 8000, 0, 2)
    //     })
    //   )
    // }

    return {
      code: 20000,
      data: {
        //饼图
        videoData: [
          {
            name: 'springboot',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'vue',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: '小程序',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'ES6',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'Redis',
            value: Mock.Random.float(1000, 10000, 0, 2)
          },
          {
            name: 'React',
            value: Mock.Random.float(1000, 10000, 0, 2)
          }
        ],
        //柱状图
        userData: [
          {
            date: '周一',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周二',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周三',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周四',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周五',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周六',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          },
          {
            date: '周日',
            new: Mock.Random.integer(1, 100),
            active: Mock.Random.integer(100, 1000)
          }
        ],
        //表格数据
        tableData: [
          {
            name: 'ES6',
            todayBuy: Mock.Random.float(1, 999, 0, 2),
            monthBuy: Mock.Random.float(1000, 9999, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
          },
          {
            name: '小程序',
            todayBuy: Mock.Random.float(1, 999, 0, 2),
            monthBuy: Mock.Random.float(1000, 9999, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
          },
          {
            name: 'Vue',
            todayBuy: Mock.Random.float(1, 999, 0, 1),
            monthBuy: Mock.Random.float(1000, 9999, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 1)
          },
          {
            name: 'springboot',
            todayBuy: Mock.Random.float(1, 999, 0, 2),
            monthBuy: Mock.Random.float(1000, 9999, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
          },
          {
            name: 'React',
            todayBuy: Mock.Random.float(1, 999, 0, 2),
            monthBuy: Mock.Random.float(1000, 9999, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
          },
          {
            name: 'Redis',
            todayBuy: Mock.Random.float(1, 999, 0, 2),
            monthBuy: Mock.Random.float(1000, 9999, 0, 2),
            totalBuy: Mock.Random.float(100000, 1000000, 0, 2)
          }
        ],
        orderData: {
          data: [
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            },
            {
              vue: Mock.Random.float(100, 8000, 0, 2),
              wechat: Mock.Random.float(100, 8000, 0, 2),
              ES6: Mock.Random.float(100, 8000, 0, 2),
              Redis: Mock.Random.float(100, 8000, 0, 2),
              React: Mock.Random.float(100, 8000, 0, 2),
              springboot: Mock.Random.float(100, 8000, 0, 2)
            }
          ],
          date: ['20210211', '20210212', '20210213', '20210214', '20210215', '20210216', '20210217']
        }
      }
    }
  }
}
