import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/home'
  
  },
    {
      path: '/home',
      name: 'home',
      component: Home
  }
];

export const scrollBehavior = (to) => {
  if (to.hash) {
    return {selector: to.hash}
  } else {
    return {x: 0, y: 0}
  }
}

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
});

export default router;
