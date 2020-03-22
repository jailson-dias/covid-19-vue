import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: Home,
    children: [
      {
        path: "/",
        name: "CheckStatus",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/CheckStatus.vue")
      },
      {
        path: "/report",
        name: "Report",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Report.vue"),
        meta: {
          requiresAuth: true
        }
      },
      // {
      //   path: "/test-covid-19",
      //   name: "Test Covid 19",
      //   component: () =>
      //     import(/* webpackChunkName: "about" */ "../views/TestCovid19.vue")
      // },
      {
        path: "/profile",
        name: "Perfil",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignIn.vue"),
    meta: {
      guest: true
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.state.token == null) {
      next({
        path: "/login",
        query: { path: to.fullPath }
      });
    } else {
      next();
    }
  } else if (store.state.token != null && to.fullPath == "/login") {
    next({
      path: "/"
    });
  } else {
    next();
  }
});

export default router;
