'use strict';
const moment = require('moment');

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD hh:mm:ss');

// 处理成功响应
exports.success = ({ ctx, result = null, msg = '请求成功' }) => {
  ctx.body = {
    code: 200,
    data: result,
    msg,
  };
  ctx.status = 200;
};

exports.nodata = ({ ctx, result = null, msg = '请求失败' }) => {
  ctx.body = {
    code: 400,
    data: result,
    msg,
  };
  ctx.status = 200;
};
