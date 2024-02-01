import "@/assets/index.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// Vuetify
import vuetify from "@/plugins/vuetify.mjs";

const app = createApp(App);

app.use(vuetify);
app.use(router);

app.mount("#app");
