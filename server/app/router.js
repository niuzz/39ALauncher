'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  /**
   * 用户类
   */
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/register', controller.user.register);
  /**
   * 媒体类
   */
  router.get('/api/media/categoryType', controller.media.getCategoryType);
  router.get('/api/media/category', controller.media.getCategory);
  router.get('/api/media', controller.media.getMedia);
  router.post('/api/media', controller.media.addMedia);
  router.put('/api/media', controller.media.updateMedia);
  router.get('/api/media/allInfo', controller.media.getAllMediaInfo);


  router.get('/api/user/verification', controller.user.verification);
  router.post('/api/user/auth', app.jwt, controller.user.auth);
  router.post('/api/source/file', controller.source.upload);
};
