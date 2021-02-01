import axios from 'axios'

//创建一个axios实例
const service = axios.create({
  //请求超时时间
  timeout: 3000
})

// 添加请求拦截器
// 比如有些请求里面，有些请求是需要带token的，可以在请求拦截器-每次发送请求前，给它的请求头添加一个参数token，把这个参数传给后端
service.interceptors.request.use(
  config => {
    return config
  },
  err => {
    console.log(err)
  }
)
//添加响应拦截器
// 比如说接口由后台返回数据，后台也可返回一个状态码，可以在响应拦截器里面拦截状态码跳到对应网址，或者说后台自己定义的一个状态码，让我们条到哪里，或者说刷新token
service.interceptors.response.use(
  //response获取响应的一些参数（响应头、响应数据）
  response => {
    let res = {} //设置一个变量为空
    res.status = response.status
    res.data = response.data
    return res
  },
  err => console.log(err)
)

export default service
