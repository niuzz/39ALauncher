'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, service } = this;
    const username = ctx.request.body.username;
    const password = ctx.request.body.password;
    const result = await service.user.login(username, password);
    if (result) {
      const token = this.service.auth.createToken({
        username: result.username,
        uid: result.uid,
      });
      const resdata = {
        token,
      };
      ctx.cookies.set('token', token, { maxAge: 24 * 60 * 60 * 1000, httpOnly: false, overwrite: true, signed: false });
      ctx.helper.success({ ctx, result: resdata });
    } else {
      ctx.helper.nodata({ ctx, msg: '用户名或密码错' });
    }
  }
  async auth() {
    const { ctx } = this;
    const isVerify = await ctx.helper.verifyToken(ctx, 555);
    ctx.helper.success({ ctx, result: isVerify });
  }
  async verification() {
    const { ctx, app } = this;
    const token = ctx.request.query.token;
    app.jwt.verify(token, app.config.jwt.secret, function(err, decoded) {
      const data = {};
      data.status = true;
      if (!err) {
        console.log(decoded);
        data.username = decoded.username;
      } else {
        data.status = false;
      }
      ctx.body = data;
    });
  }
}

module.exports = UserController;
