import Vue from 'vue';
import Vuex from 'vuex';
import { AuthModule } from './auth.module';
import { CartModule } from './cart.module';
Vue.use(Vuex);
// export Store with modules
const store = new Vuex.Store({
    modules: {
        authModule: new AuthModule(),
        cartModule: new CartModule()
    }
});
store.subscribe((mutation, state) => {
    localStorage.setItem("applicationState", JSON.stringify(state));
});
export default store;
//# sourceMappingURL=index.js.map