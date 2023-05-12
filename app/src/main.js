import { createApp } from "vue";
import * as VueRouter from "vue-router";

import App from "./App.vue";
import routes from "./router/routes";

//components
import AppCard from "./components/AppCard.vue";

//Layoutes
import DashboardLayout from "./layouts/DashboardLayout.vue";
import NavigationLayout from "./layouts/NavigationLayout.vue";

const app = createApp(App);

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

//compoents
app.component("AppCard", AppCard);

//layouts
app.component("DashboardLayout", DashboardLayout);
app.component("NavigationLayout", NavigationLayout);

app.use(router);

app.mount("#app");
