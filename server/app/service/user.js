'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login(uid) {

    return await this.app.mysql.get('user', { uid });
  }
}

module.exports = UserService;
