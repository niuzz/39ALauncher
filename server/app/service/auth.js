'use strict';

const Service = require('egg').Service;

class Authorization extends Service {
  createToken(data) {
    return this.app.jwt.sign(data, this.app.config.jwt.secret, {
      expiresIn: '24h',
    });
  }
}

module.exports = Authorization;
