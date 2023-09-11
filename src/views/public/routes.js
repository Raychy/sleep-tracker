export const publicRoutes = [
     {
          path: "/",
          name: "Onboardview",
          component: () =>
          import(
            /* webpackChunkName: "Onboard" */ "@/views/public/Onboard.vue"
          ),
     },
     {
          path: "/details",
          name: "OnboardMoverview",
          component: () =>
          import(
            /* webpackChunkName: "OnboardMoverview" */ "@/views/public/Details.vue"
          ),
     },
]