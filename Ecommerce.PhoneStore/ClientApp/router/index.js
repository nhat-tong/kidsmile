import Vue from 'vue';
import VueRouter from "vue-router";
import store from '../store/index';
import routes from './routes';
Vue.use(VueRouter);
const router = new VueRouter({ mode: 'history', routes: routes });
router.beforeEach((to, from, next) => {
    if (to.matched.some(route => route.meta.requiresAuth)) {
        if (!store.getters['authModule/isAuthenticated']) {
            store.commit('authModule/showAuthModal');
            next({ path: from.path, query: { redirect: to.path } });
        }
        else {
            next();
        }
    }
    else {
        next();
    }
    ;
});
export default router;
//# sourceMappingURL=index.js.map