import Vue from 'vue';
import Vuex from 'vuex';

import { AuthModule } from './auth.module';
import { CartModule } from './cart.module';

Vue.use(Vuex);

// export Store with modules
const store = new Vuex.Store({
    modules: {
        auth: new AuthModule(),
        cart: new CartModule()
    }
});

store.subscribe((mutation, state) => {
    localStorage.setItem("store", JSON.stringify(state));
});

export default store;