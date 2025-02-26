import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import Highlight from "@/views/Highlight.vue";
import Chatbot from "@/views/Chatbot.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/highlight", component: Highlight },
  { path: "/chatbot", component: Chatbot }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
