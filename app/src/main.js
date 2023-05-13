import { createApp } from "vue";
import * as VueRouter from "vue-router";
import { createPinia } from "pinia";

import App from "./App.vue";
import routes from "./router/routes";

//Layoutes
import DashboardLayout from "./layouts/DashboardLayout.vue";
import NavigationLayout from "./layouts/NavigationLayout.vue";

//components
import AppCard from "./components/AppCard.vue";

const pinia = createPinia();
const app = createApp(App);

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

//layouts
app.component("DashboardLayout", DashboardLayout);
app.component("NavigationLayout", NavigationLayout);

//compoents
app.component("AppCard", AppCard);

app.use(router);
app.use(pinia);

app.mount("#app");
