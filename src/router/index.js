import { createWebHistory, createRouter } from "vue-router";

import Home from "../views/Home.vue";

const routes = [{ path: "/", component: Home }];

const router = createRouter({
	history: createWebHistory(),
	routes,
	scrollBehavior(to, from, savedPosition) {
		return { top: 0 };
	},
});

export default router;
