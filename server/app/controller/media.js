'use strict';

const Controller = require('egg').Controller;

class MediaController extends Controller {
  async getCategoryType() {
    const { ctx } = this;
    const categoryType = await ctx.service.media.getCategoryType();
    ctx.helper.success(ctx, categoryType);
  }

  async updateCategoryType() {
    this.ctx.body = 'updateCategoryType';
  }


  async getCategory() {
    const { ctx } = this;
    const category = await ctx.service.media.getCategory();
    ctx.helper.success(ctx, category);
  }

  async updateCategory() {
    this.ctx.body = 'updateCategory';
  }

  async getMedia() {
    const { ctx } = this;
    const media = await ctx.service.media.getMedia();
    ctx.helper.success(ctx, media);
  }

  async addMedia() {
    const { ctx } = this;
    const params = ctx.request.body;
    const result = await ctx.service.media.addMedia(params);
    ctx.helper.success(ctx, result);
  }

  async getAllMediaInfo() {
    const { ctx } = this;
    const media = await ctx.service.media.getMedia();
    const category = await ctx.service.media.getCategory();
    const categoryType = await ctx.service.media.getCategoryType();
    ctx.helper.success(ctx, { categoryType, category, media });
  }

  async updateMedia() {
    this.ctx.body = 'updateMedia';
  }
}

module.exports = MediaController;
