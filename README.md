# mpvue-h5

> weapp and h5 project. 一套代码，同时适配微信小程序和Vue H5应用。

开发过程中，使用的Vue语法尽量让两者都支持，即mpvue不支持的某些Vue语法，就不用。

## Build Setup

``` bash
# install dependencies
cd mpvue-h5
npm install

# Vue H5 at localhost:8080
// H5开发运行
npm run dev:h5
// H5打包
npm run build:h5

# weapp
// 小程序开发运行
npm run dev:weapp
// 小程序打包
npm run build:weapp
```

## 更新日志

#### 20180825
1. 目前分别定义两套环境：prod & dev；
2. 修改postcssrc.js，避免H5应用px单位都转为rpx；
3. 为H5引入lib-flexible和px2rem-loader，实现移动端适配；
4. 引入less & less-loader，支付less；
5. 引入http请求封装包flyio，并封装utils/api.js实现简单拦截；
6. 编写全局样式global.less；

## 其它

- Vue.js Api：https://cn.vuejs.org/v2/api/
- mpvue doc：http://mpvue.com/mpvue/

**关注mpvue更新：** http://mpvue.com/change-log/
