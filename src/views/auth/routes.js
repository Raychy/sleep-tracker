import guest from "@/router/middleware/guest";
export const authRoutes = [
     {
          path: "/signup",
          name: "Signupview",
          component: () =>
          import(
            /* webpackChunkName: "Signup" */ "@/views/auth/Signup.vue"
          ),
          meta: { middleware: [guest] },
     },
     {
          path: "/login",
          name: "Loginview",
          component: () =>
          import(
            /* webpackChunkName: "login" */ "@/views/auth/Login.vue"
          ),
          meta: { middleware: [guest] },
     }, 
]