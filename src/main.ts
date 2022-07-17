import { createApp } from "vue";
import { createPinia } from "pinia";
import axios from "axios";
import App from "./App.vue";
import router from "./router";

import "@/assets/scss/main.scss";

const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:8000/",
  headers: {
    Accept: "application/json",
    "Access-Control-Allow-Origin": "*",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest",
    // "Authorization": "Bearer 45|NhllkSP3Dlgr5OvAgP8yoFt8OL2mn7s4USshDWcP"
  },
  withCredentials: true,
});

const app = createApp(App);
app.config.globalProperties.$api = { ...axiosInstance };

app.use(createPinia());
app.use(router);

app.mount("#app");
