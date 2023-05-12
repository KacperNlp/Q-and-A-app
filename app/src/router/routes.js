export default [
  {
    path: "/",
    name: "home",
    component: () => import("../view/HomeView.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../view/AboutView.vue"),
  },
  {
    path: "/post/:id",
    component: () => import("../view/QuestionView.vue"),
  },
];
