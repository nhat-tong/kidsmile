import Vue from "vue";
import BootstrapVue from "bootstrap-vue";
import axios from "axios";
import VueToastr from '@deveodk/vue-toastr';
import VeeValidate from 'vee-validate';

import AppComponent from "./components/app/app.component.vue";

import router from "./router/index";
import store from './store/index';
import { currency, date } from './filters/index';

Vue.filter('currency', currency);
Vue.filter('date', date);

Vue.use(BootstrapVue);
Vue.use(VueToastr, {
    defaultPosition: 'toast-top-right',
    defaultTimeout: 1000
});
Vue.use(VeeValidate);

// restore application state
const applicationState = localStorage.getItem("applicationState");
if (applicationState) {
    const payload = JSON.parse(applicationState);
    store.commit('authModule/restoreState', payload.authModule);
    store.commit('cartModule/restoreState', payload.cartModule);

    if (store.getters['authModule/isAuthenticated']) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${store.state.authModule.auth.access_token}`;
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