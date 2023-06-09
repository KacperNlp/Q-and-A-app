import { createApp } from "vue";
import * as VueRouter from "vue-router";
import { createPinia } from "pinia";

import App from "./App.vue";
import routes from "./router/routes";

//Layoutes
import DashboardLayout from "./layouts/DashboardLayout.vue";
import NavigationLayout from "./layouts/NavigationLayout.vue";
import QuestionPageLayout from "./layouts/QuestionPageLayout.vue";

//components
import AppBackToHomeLink from "./components/AppBackToHomeLink.vue";
import AppCard from "./components/AppCard.vue";
import AppCategoryBox from "./components/AppCategoryBox.vue";
import AppLinkBtn from "./components/AppLinkBtn.vue";
import AppQuestionBlock from "./components/AppQuestionBlock.vue";
import AppUserBlock from "./components/AppUserBlock.vue";

const pinia = createPinia();
const app = createApp(App);

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
});

//layouts
app.component("DashboardLayout", DashboardLayout);
app.component("NavigationLayout", NavigationLayout);
app.component("QuestionPageLayout", QuestionPageLayout);

//compoents
app.component("AppBackToHomeLink", AppBackToHomeLink);
app.component("AppCard", AppCard);
app.component("AppCategoryBox", AppCategoryBox);
app.component("AppLinkBtn", AppLinkBtn);
app.component("AppQuestionBlock", AppQuestionBlock);
app.component("AppUserBlock", AppUserBlock);

app.use(router);
app.use(pinia);

app.mount("#app");
