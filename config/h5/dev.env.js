'use strict'

// 应用配置信息
const apiBase = '/api';
const staticBase = '/static';

module.exports = {
  NODE_ENV: '"dev"',
  apiBase: JSON.stringify(apiBase),
  staticBase: JSON.stringify(staticBase)
}