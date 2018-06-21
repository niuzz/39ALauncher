'use strict';
const moment = require('moment');

// 格式化时间
exports.formatTime = time => moment(time).format('YYYY-MM-DD hh:mm:ss');

// 获取 Token
exports.getAccessToken = ctx => {
  const bearerToken = ctx.request.header.authorization;
  return bearerToken && bearerToken.replace('Bearer ', '');
};

// 校验 Token
exports.verifyToken = async (ctx, userId) => {
  const token = this.getAccessToken(ctx);
  const verifyResult = await ctx.service.auth.verifyToken(token);
  if (!verifyResult.verify) {
    ctx.helper.error(ctx, 401, verifyResult.message);
    return false;
  }
  if (userId !== verifyResult.message.uid) {
    ctx.helper.error(ctx, 401, '用户 ID 与 Token 不一致');
    return false;
  }
  ctx.helper.success(ctx, verifyResult);
  return true;
};


// 处理失败响应
exports.error = (ctx, code, msg = '请求失败') => {
  ctx.body = {
    code,
    msg,
  };
  ctx.status = code;
};

// 处理成功响应
exports.success = (ctx, result = null, msg = '请求成功') => {
  ctx.body = {
    code: 200,
    data: result,
    msg,
  };
  ctx.status = 200;
};

exports.nodata = (ctx, result = null, msg = '无相关数据') => {
  ctx.body = {
    code: 400,
    data: result,
    msg,
  };
  ctx.status = 200;
};
