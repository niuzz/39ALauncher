'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    const { ctx, service } = this;
    const result = await service.user.login(ctx.id);
    ctx.helper.success({ ctx, result });
  }
}

module.exports = UserController;
