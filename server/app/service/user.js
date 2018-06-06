'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login() {
    throw new Error('error111');
  }
}

module.exports = UserService;
