import { createWebHashHistory, createRouter } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    component: () =>
      import(
        /**webpackChunkName: "home" */ "../modules/layouts/EntryLayout.vue"
      ),
  },
  {
    path: "/succes",
    name: "success-form",
    component: () =>
      import(
        /**webpackChunkName: "succes-form" */ "../modules/views/SuccesForm.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
