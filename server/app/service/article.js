'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async addArticle(params) {
    const { app } = this;
    return await app.mysql.insert('article', params);
  }

  async getArticle(params) {
    const { app } = this;
    return await app.mysql.select('article', {
      where: params,
    });
  }
}

module.exports = ArticleService;
