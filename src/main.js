import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import VueMeta from "vue-meta";
import "@/assets/css/style.scss";
import "@/components/AppModal/Plugin";
import "swiper/swiper-bundle.css";
import "../event-bus";
import { metaInfo } from "@/libs/MetaInfo";
import { meta } from "@/meta";

const ModalOrder = () => import("@/components/ModalOrder");

Vue.component("modal-order", ModalOrder);
Vue.use(VueMeta);

metaInfo.set(meta);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
