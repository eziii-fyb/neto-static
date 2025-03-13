import { createApp } from "vue";
import { createPinia } from "pinia";
import Vue3Marquee from "vue3-marquee";
import { MotionPlugin } from "@vueuse/motion";
import piniaPluginPersistedstate from "pinia-plugin-persistedstate";
import "./main.css";
import App from "./App.vue";
import router from "./router/index";

const pinia = createPinia();
pinia.use(piniaPluginPersistedstate);
const app = createApp(App);

app.use(Vue3Marquee);
app.use(MotionPlugin);
app.use(router);
app.use(pinia);
app.mount("#app");
