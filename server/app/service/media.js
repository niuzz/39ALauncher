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
    return await app.mysql.query('SELECT table_media.*, table_category.name as category_name, table_category_type.`name` as category_type_name FROM media as table_media INNER JOIN category as table_category ON table_media.category = table_category.id INNER JOIN `category-type` as table_category_type ON table_category.type = table_category_type.id');
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
