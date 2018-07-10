'use strict';

const Controller = require('egg').Controller;

class Admin extends Controller {
  async login() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.admin.login(params);
    if (result) {
      ctx.helper.success(ctx, result);
    } else {
      ctx.helper.nodata(ctx, result);
    }
  }

  async create() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.admin.create(params);
    ctx.helper.success(ctx, result);
  }
}

module.exports = Admin;

