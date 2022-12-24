import { createRouter, createWebHistory } from "vue-router";
// import HomeView from "../views/HomeView.vue";
import home from "@/pages/home/index.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: home,
      redirect: "/recommend",
      children: [
        {
          path: "/recommend",
          name: "recommend",
          component: import("@/pages/recommend/index.vue"),
        },
      ],
    },
  ],
});

router.afterEach((to, form) => {
  console.log(
    `%cYou went from ${form.name ? (form.name as string) : "未知"}%c to ${
      to.name as string
    }%c`,
    "background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff",
    "background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff",
    "background:transparent"
  );
});

export default router;
