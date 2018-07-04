'use strict';

const fs = require('fs');
const path = require('path');
const Controller = require('egg').Controller;
const awaitWriteStream = require('await-stream-ready').write;
const sendToWormhole = require('stream-wormhole');

class SourceClass extends Controller {

  async upload() {
    const stream = await this.ctx.getFileStream();
    const filename = encodeURIComponent(stream.fields.name);
    const uid = encodeURIComponent(stream.fields.uid);
    const urlFileName = uid + '_' + new Date().getTime() + '_' + filename;
    // + path.extname(stream.filename).toLowerCase()
    const target = path.join(__dirname, '../public/upload', urlFileName);
    const writeStream = fs.createWriteStream(target);
    try {
      await awaitWriteStream(stream.pipe(writeStream));
    } catch (err) {
      await sendToWormhole(stream);
      throw err;
    }

    this.ctx.body = { url: '/public/upload/' + urlFileName };
  }
}

module.exports = SourceClass;
