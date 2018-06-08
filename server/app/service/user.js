'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login(username, password) {
    return await this.app.mysql.get('user', { username, password });
  }
}

module.exports = UserService;
