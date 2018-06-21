'use strict';

const Service = require('egg').Service;

class Authorization extends Service {
  createToken(data) {
    return this.app.jwt.sign(data, this.app.config.jwt.secret, {
      expiresIn: '24h',
    });
  }
  verifyToken(token) {
    return new Promise((resolve, reject) => {
      this.app.jwt.verify(token, this.app.config.jwt.secret, function(err, decoded) {
        const result = {};
        if (err) {
          result.verify = false;
          result.message = err.message;
          reject(result);
        } else {
          result.verify = true;
          result.message = decoded;
        }
        resolve(result);
      });
    });
  }
}

module.exports = Authorization;
