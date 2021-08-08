import Vue from "vue";
import VueRouter from "vue-router";
import store from "../store";
import MainInterface from "../views/MainInterface.vue";
import HelloWorld from "../views/HelloWorld.vue";
import Welcome from "../views/Welcome.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "MainInterface",
    component: MainInterface,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/helloworld",
    name: "Hello World",
    component: HelloWorld,
  },
  {
    path: "/welcome",
    name: "Welcome",
    component: Welcome,
  },
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.name !== "Welcome" && !store.getters.isWelcomed)
    next({ name: "Welcome" });
  else next();
});

export default router;
