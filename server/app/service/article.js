'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async addArticle(params) {
    const { app } = this;
    return await app.mysql.insert('article', params);
  }
}

module.exports = ArticleService;
