import { createApp } from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";
import routes from "./router/routes";

const app = createApp(App);

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

app.use(router);

app.mount("#app");
