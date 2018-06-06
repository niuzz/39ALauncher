'use strict';

const Controller = require('egg').Controller;

class UserController extends Controller {
  async login() {
    this.ctx.body = 111;
  }
}

module.exports = UserController;
