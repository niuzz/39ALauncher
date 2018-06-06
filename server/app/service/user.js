'use strict';

const Service = require('egg').Service;

class UserService extends Service {
  async login() {
    return ('this is service');
  }
}

module.exports = UserService;
