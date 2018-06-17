'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.post('/api/user/login', controller.user.login);
  router.get('/api/user/verification', controller.user.verification);
  router.post('/api/user/admin', app.jwt, controller.user.admin);
  router.post('/api/source/file', controller.source.upload);
};
