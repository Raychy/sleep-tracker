import auth from "@/router/middleware/auth";

export const privateRoutes = [
     {
          path: "/home",
          name: "Homeview",
          component: () =>
          import(
            /* webpackChunkName: "Home" */ "@/views/private/Home.vue"
          ),
          meta: { middleware: [auth] },
     },
      
]