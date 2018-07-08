'use strict';

const Service = require('egg').Service;

class ArticleService extends Service {
  async addArticle(params) {
    const { app } = this;
    params.createAt = new Date();
    return await app.mysql.insert('article', params);
  }

  async getArticle(params) {
    const { app } = this;
    return await app.mysql.select('article', {
      where: params,
      columns: [ 'a.title', 'u.username' ],
      joins: ([{
        as: 'u',
        join: 'inner',
        table: 'user',
        on: [ 'a.uid', 'u.id' ],
      }]),
    });
  }
}

module.exports = ArticleService;
