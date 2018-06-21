'use strict';

const Service = require('egg').Service;

class Authorization extends Service {
  createToken(data) {
    const { app } = this;
    return app.jwt.sign(data, app.config.jwt.secret, {
      expiresIn: '24h',
    });
  }
  verifyToken(token) {
    return new Promise((resolve, reject) => {
      const { app } = this;
      app.jwt.verify(token, this.app.config.jwt.secret, function(err, decoded) {
        const result = {};
        if (err) {
          result.verify = false;
          result.message = err.message;
          console.log('------------------------------' + err);
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
