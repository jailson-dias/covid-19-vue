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
          import(/* webpackChunkName: "about" */ "../views/CheckStatus.vue"),
        meta: {
          title: "Coronavírus na sua região"
        }
      },
      {
        path: "/report",
        name: "Report",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Report.vue"),
        meta: {
          requiresAuth: true,
          title: "Reportar um caso de coronavírus na sua região"
        }
      },
      {
        path: "/news",
        name: "Notícias sobre o coronavírus",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/News.vue"),
        meta: {
          title: "Notícias sobre o coronavírus"
        }
      },
      {
        path: "/test-covid-19",
        name: "Test Covid 19",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/TestCovid19.vue"),
        meta: {
          title: "Teste online de coronavírus"
        }
      },
      {
        path: "/profile",
        name: "Perfil",
        component: () =>
          import(/* webpackChunkName: "about" */ "../views/Profile.vue"),
        meta: {
          requiresAuth: true,
          title: "Perfil"
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
      title: "Login"
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

const home = [
  {
    path: "/",
    selected: 0
  },
  {
    path: "/report",
    selected: 0
  },
  {
    path: "/news",
    selected: 1
  },
  {
    path: "/test-covid-19",
    selected: 2
  },
  {
    path: "/profile",
    selected: 3
  }
];

router.beforeEach((to, from, next) => {
  const selected = home.filter(item => item.path == to.fullPath);
  if (selected.length > 0) {
    store.dispatch("setActiveScreenHome", { screen: selected[0].selected });
  }
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);
  from.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) document.title = nearestWithTitle.meta.title;

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(
    document.querySelectorAll("[data-vue-router-controlled]")
  ).map(el => el.parentNode.removeChild(el));

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map(tagDef => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag));

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
