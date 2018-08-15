import Vue from "vue";
import Router from "vue-router";
const _import = require("@common/import.js");

Vue.use(Router);

export const constantRouterMap = [
  { path: "/", redirect: "/demo" },
  {
    path: "/demo",
    name: "demo",
    component: _import("demo/index")
  }
];

export default new Router({
  // mode: "history",
  // 切换路径模式，变成history模式，也就是去掉#
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 };
  }, //滚动条滚动的行为，不加这个默认就会记忆原来滚动条的位置
  routes: constantRouterMap
});
