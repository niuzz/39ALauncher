'use strict';

const Service = require('egg').Service;

class MediaClass extends Service {

  async getCategoryType() {
    const { app } = this;
    return await app.mysql.select('category-type');
  }

  async getCategory() {
    const { app } = this;
    return await app.mysql.select('category');
  }

  async getMedia() {
    const { app } = this;
    return await app.mysql.select('media');
  }

  async addMedia(params) {
    const { app } = this;
    return await app.mysql.insert('media', params);
  }

  async updateMedia(params) {
    const { app } = this;
    return await app.mysql.update('media', params);
  }
}

module.exports = MediaClass;
