'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, service } = this;
    const username = ctx.request.body.username;
    const password = ctx.request.body.password;
    const result = await service.user.login(username, password);
    if (result) {
      const token = this.app.jwt.sign({
        username: result.username,
        uid: result.uid,
      }, this.app.config.jwt.secret, {
        expiresIn: '1days',
      });

      const resdata = {
        token,
      };
      ctx.helper.success({ ctx, result: resdata });
    } else {
      ctx.helper.nodata({ ctx, msg: '用户名或密码错' });
    }
  }
  async admin() {
    console.log(222);
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
