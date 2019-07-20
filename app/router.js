module.exports = app => {
  const { router, controller} = app;

  // apps
  router.get('/report(/?)**', controller.home.report);
  router.all('/api/getlist', controller.home.getlist);
}