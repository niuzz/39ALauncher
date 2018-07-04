'use strict';

const Controller = require('egg').Controller;

class ArticleController extends Controller {
  async addArticle() {
    const	{ ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.article.addArticle(params);
    if (result) {
      ctx.helper.success(ctx, result);
    }
  }
}

module.exports = ArticleController;
