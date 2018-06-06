'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login(id) {
    return await this.app.mysql.get('user', { uid: 24 });
  }
}

module.exports = UserService;
