'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/user/login', controller.user.login);
  router.post('/api/user/register', controller.user.register);
  router.get('/api/media', controller.media.getMedia);


  router.get('/api/user/verification', controller.user.verification);
  router.post('/api/user/auth', app.jwt, controller.user.auth);
  router.post('/api/source/file', controller.source.upload);
};
