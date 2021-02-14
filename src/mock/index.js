import Mock from 'mockjs'
import hmeApi from './home'
// 设置200-2000毫秒延时请求到数据
Mock.setup({
  timeout: '200-2000'
})

//首页相关
// 拦截是、home/getData,hmeApi.getHomeData这个函数返回结果作为一个响应数据返回我们拦截的ajax
Mock.mock(/\/home\/getData/, 'get', hmeApi.getStatisticalData)
