import Vue from "vue";
// import Router from "vue-router";
import Router from "./router/router";
import Foo from "./pages/Foo";
import Bar from "./pages/Bar";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/foo",
      component: Foo,
      beforeEnter(to, from, next) {
        console.log("/foo::beforeEnter");
        next();
      }
    },
    { path: "/bar", component: Bar }
  ]
});

router.beforeEach((to, from, next) => {
  console.log("router.beforeEach");
  next();
});

router.beforeResolve((to, from, next) => {
  console.log("router.beforeResolve");
  next();
});

router.afterEach((to, from) => {
  console.log("router.afterEach");
});

export default router;
