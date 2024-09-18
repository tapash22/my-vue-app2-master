import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";


const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: () => import(/* webpackChunkName: "home" */ "../views/HomeView.vue")
  },
  {
    path: "/about",
    name: "about",
    component: () => import(/* webpackChunkName: "about" */ "../views/AboutView.vue")
  },
  {
    path: "/details",
    name: "details",
    component: () => import(/* webpackChunkName: "details" */ "../views/DetailView.vue")
  },
  {
    path: "/:id",
    name: "single-product",
    component: () => import(/* webpackChunkName: "single-product" */ "../views/ProductView.vue")
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

console.log("history")

export default router;