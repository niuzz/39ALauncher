'use strict';

const Controller = require('egg').Controller;

class Admin extends Controller {
  async login() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.admin.login(params);
    ctx.helper.success(ctx, result);
  }

  async create() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.admin.create(params);
    ctx.helper.success(ctx, result);
  }
}

module.exports = Admin;

