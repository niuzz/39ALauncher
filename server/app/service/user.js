'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login(mobile, password) {
    const result = await this.app.mysql.get('user', { mobile, password });
    return result;
  }

  async create(username, password, mobile, createAt) {
    return await this.app.mysql.insert('user', { username, password, mobile, createAt });
  }

  async findUserByMobile(mobile) {
    return await this.app.mysql.get('user', { mobile });
  }
}

module.exports = UserService;
