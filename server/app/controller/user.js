'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async register() {
    const { ctx, service } = this;
    const username = ctx.request.body.username;
    const password = ctx.request.body.password;
    const mobile = ctx.request.body.mobile;
    const createAt = new Date().getTime();
    const user = await service.user.findUserByMobile(mobile);
    if (user) {
      ctx.helper.nodata(ctx, null, '手机已注册');
      return;
    }
    const result = await service.user.create(username, password, mobile, createAt);
    if (result) {
      ctx.helper.success(ctx, result);
    } else {
      ctx.helper.error(ctx, 400, '创建失败');
    }
  }

  async login() {
    const { ctx, service } = this;
    const mobile = ctx.request.body.mobile;
    const password = ctx.request.body.password;
    const result = await service.user.login(mobile, password);
    if (result) {
      const token = this.service.auth.createToken({
        username: result.username,
        id: result.id,
      });
      const resdata = {
        user: {
          username: result.username,
          id: result.id,
        },
        token,
      };
      ctx.cookies.set('token', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: false, overwrite: true, signed: false });
      ctx.helper.success(ctx, resdata);
    } else {
      ctx.helper.nodata(ctx, null, '用户名或密码错');
    }
  }

  async auth() {
    const { ctx } = this;
    await ctx.helper.verifyToken(ctx, 555);
  }

  async verification() {
    const { ctx, app } = this;
    const token = ctx.request.query.token;
    app.jwt.verify(token, app.config.jwt.secret, function(err, decoded) {
      const data = {};
      data.status = true;
      if (!err) {
        data.username = decoded.username;
      } else {
        data.status = false;
      }
      ctx.body = data;
    });
  }
}

module.exports = UserController;
