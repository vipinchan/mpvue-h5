/**
 * Http请求交互封装
 * doc: https://github.com/wendux/fly/blob/master/README-CH.md
 * @authors VipinChan (vipinchan@hotmail.com)
 * @date    2018-08-24 15:18:42
 * @version $Id$
 */

import Fly from 'flyio'

const fly = new Fly()
fly.config.apiBase = process.env.apiBase

// 添加请求拦截器
/*
{
  baseURL,  //请求的基地址
  body, //请求的参数
  headers, //自定义的请求头
  method, // 请求方法
  timeout, //本次请求的超时时间
  url, // 本次请求的地址
  withCredentials, //跨域请求是否发送第三方cookie
  ... //options中自定义的属性
}
*/
fly.interceptors.request.use((config, promise) => {
  console.log('发起请求：' + config.apiBase + config.url)
  console.log('请求参数：' + JSON.stringify(config.body))
  //给所有请求添加自定义header
  config.headers["X-Tag"] = "flyio"
  return config
})


// 添加响应拦截器，响应拦截器会在then/catch处理之前执行
/*
{
  data, //服务器返回的数据
  engine, //请求使用的http engine(见下面文档),浏览器中为本次请求的XMLHttpRequest对象
  headers, //响应头信息
  request  //本次响应对应的请求信息，即上面的request结构
}
*/
fly.interceptors.response.use(
  (response, promise) => {
    return promise.resolve(response.data)
  },
  (err, promise) => {
    // 发生网络错误后会走到这里
    if (err) {
      // 处理异常
      /*
      {
        message:"Not Find 404", //错误消息
        status:404, //如果服务器可通，则为http请求状态码。网络异常时为0，网络超时为1
        request:{...}, //对应的请求信息
        response:{}, //响应信息
        engine:{}//请求使用的http engine(见下面文档),浏览器中为本次请求的XMLHttpRequest对象
      }
      */
    }
    return promise.reject()
  }
)

// 移除拦截器，只需要将拦截器设为null即可
// fly.interceptors.request.use(null)
// fly.interceptors.response.use(null,null)
export default fly
