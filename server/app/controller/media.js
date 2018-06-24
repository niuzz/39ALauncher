'use strict';

const Controller = require('egg').Controller;

class MediaController extends Controller {
  async getMedia() {
    this.ctx.body = 'media';
  }
}

module.exports = MediaController;
