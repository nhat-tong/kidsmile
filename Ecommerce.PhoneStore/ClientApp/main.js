import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import axios from "axios";
import AppComponent from "./components/app/app.component.vue";
import router from "./router/index";
import store from './store/index';
Vue.use(BootstrapVue);
// restore application state
const applicationState = localStorage.getItem("applicationState");
if (applicationState) {
    store.commit('authModule/restoreState', JSON.parse(applicationState));
    if (store.getters['auth/isAuthenticated']) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.auth.auth.access_token}`;
    }
}
new Vue({
    el: "#app-root",
    router,
    store,
    render: h => h(AppComponent)
});
if (module.hot) {
    module.hot.accept();
}
//# sourceMappingURL=main.js.map