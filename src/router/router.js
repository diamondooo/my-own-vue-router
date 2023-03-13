import Vue from "vue";
import RouterView from "./components/RouterView";
import RouterLink from "./components/RouterLink";

Vue.component("RouterView", RouterView);
Vue.component("RouterLink", RouterLink);

class RouterTable {
  constructor(routes) {
    this._pathMap = new Map();
    this.init(routes);
  }
  init(routes) {
    const addRoute = route => {
      this._pathMap.set(route.path, route);
    };

    routes.forEach(route => addRoute(route));
  }
  match(path) {
    let find;
    for (const key of this._pathMap.keys()) {
      if (path === key) {
        find = key;
        break;
      }
    }
    return this._pathMap.get(find);
  }
}
import Html5Mode from "./history/html5";

function registerHook(list, fn) {
  list.push(fn);
  return () => {
    const i = list.indexOf(fn);
    if (i > -1) list.splice(i, 1);
  };
}

export default class Router {
  constructor({ routes = [] }) {
    this.routerTable = new RouterTable(routes);
    this.history = new Html5Mode(this);

    this.beforeHooks = [];
    this.resolveHooks = [];
    this.afterHooks = [];
  }
  init(app) {
    const { history } = this;
    history.listen(route => {
      app._route = route;
    });
    history.transitionTo(history.getCurrentLocation());
  }
  push(to) {
    this.history.push(to);
  }
  beforeEach(fn) {
    return registerHook(this.beforeHooks, fn);
  }
  beforeResolve(fn) {
    return registerHook(this.resolveHooks, fn);
  }
  afterEach(fn) {
    return registerHook(this.afterHooks, fn);
  }
}

Router.install = function() {
  Vue.mixin({
    beforeCreate() {
      if (this.$options.router !== undefined) {
        this._routerRoot = this;
        this._router = this.$options.router;
        this._router.init(this);
        Vue.util.defineReactive(this, "_route", this._router.history.current);
      } else {
        this._routerRoot = this.$parent && this.$parent._routerRoot;
      }
    }
  });
};
