import { createRouter, createWebHistory } from "vue-router";
const routes = [
     {
          path: "/",
          name: "Homeview",
          component: () =>
          import(
            /* webpackChunkName: "Home" */ "@/views/Home.vue"
          ),
     },
     {
          path: "/login",
          name: "Loginview",
          component: () =>
          import(
            /* webpackChunkName: "login" */ "@/views/Login.vue"
          ),
     },
];

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes,
});

// router.beforeEach((to, from, next) => {
//   if (!to.meta.middleware) {
//     return next();
//   }
//   const middleware = to.meta.middleware;

//   const context = {
//     to,
//     from,
//     next,
//     store,
//   };
//   return middleware[0]({
//     ...context,
//     next: middlewarePipeline(context, middleware, 1),
//   });
// });
// router.onError((error) => {
//   if (/loading chunk \d* failed./i.test(error.message)) {
//     window.location.reload();
//   }
// });
export default router;
