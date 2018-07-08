'use strict';

const Service = require('egg').Service;

class AdminService extends Service {
  async login(params) {
    const { app } = this;
    const result = await app.mysql.get('admin', params);
    result ? result : null;
    return result;
  }

  async create(params) {
    const { app } = this;
    console.log(params);
    const result = await app.mysql.insert('admin', params);
    return result;
  }
}

module.exports = AdminService;
