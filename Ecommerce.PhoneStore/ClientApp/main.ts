import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import AppComponent from "./components/app/app.component.vue";

import router from "./router/index";
import store from './store/index';

Vue.use(BootstrapVue);

new Vue({
    el: "#app-root",
    router,
    store,
    render: h => h(AppComponent)
});

if (module.hot) {
    module.hot.accept();
}