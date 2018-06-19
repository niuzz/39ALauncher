export default async (context) => {
  context.app.router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth) {
      console.log(2222)
    }
    next()
  })
}
