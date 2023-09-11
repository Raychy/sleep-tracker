import { createRouter, createWebHistory } from "vue-router";
import { privateRoutes } from "../views/private/routes";
import { publicRoutes } from "../views/public/routes";
import { authRoutes } from "../views/auth/routes";
import middlewarePipeline from "./kernel/middlewarePipeline";
import { createPinia } from 'pinia'
import { useAuthStore } from "../store";
// console.log('trying...');
const routes = [
    ...privateRoutes,
    ...publicRoutes,
    ...authRoutes

];

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes,
});

router.beforeEach((to, from, next) => {
  // console.log('tryin2...')
  if (!to.meta.middleware) {
    console.log('trying4 no middleware...')
    return next();
  }
  
  const pinia = createPinia()
  const middleware = to.meta.middleware;
  const store = useAuthStore(pinia)
  
  // console.log('heee', store.token)

  const context = {
    to,
    from,
    next,
    store,
  };
  return middleware[0]({
    ...context,
    next: middlewarePipeline(context, middleware, 1),
  });
});
// console.log('trying3...')
// router.onError((error) => {
//   if (/loading chunk \d* failed./i.test(error.message)) {
//     window.location.reload();
//   }
// });
export default router;
