import { createApp } from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";
import routes from "./router/routes";

//components
import NavigationLayout from "./layouts/NavigationLayout.vue";

const app = createApp(App);

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

//compoents
app.component("NavigationLayout", NavigationLayout);

app.use(router);

app.mount("#app");
