import Mock from 'mockjs'
import hmeApi from './home'
import userApi from './user'
// 设置200-2000毫秒延时请求到数据
Mock.setup({
  timeout: '200-2000'
})

//首页相关
// 拦截是、home/getData,hmeApi.getHomeData这个函数返回结果作为一个响应数据返回我们拦截的ajax
Mock.mock(/\/home\/getData/, 'get', hmeApi.getStatisticalData)

//用户相关
Mock.mock(/\/user\/getUser/, 'get', userApi.getUserList)
Mock.mock(/\/user\/del/, 'get', userApi.deleteUser)
Mock.mock(/\/user\/batchremove/, 'get', userApi.batchremove)
Mock.mock(/\/user\/add/, 'post', userApi.createUser)
Mock.mock(/\/user\/deit/, 'post', userApi.updateUser)
Mock.mock(/\/user\/getData/, 'get', hmeApi.getStatisticalData)
