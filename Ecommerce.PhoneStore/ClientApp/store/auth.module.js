import { State } from './state';
import axios from "axios";
// getters
const getters = {
    isAuthenticated: (state) => {
        return state.auth !== null && state.auth.access_token !== null;
    },
    isInRole: (state, getters) => role => {
        const result = getters.isAuthenticated && state.auth.roles.indexOf(role) > -1;
        return result;
    }
};
// mutations
const mutations = {
    showAuthModal: (state) => {
        state.showAuthModal = true;
    },
    hideAuthModal: (state) => {
        state.showAuthModal = false;
    },
    loginRequest: (state) => {
        state.loading = true;
    },
    loginSuccess: (state, payload) => {
        state.auth = payload;
        state.loading = false;
    },
    loginError: (state) => {
        state.loading = false;
    },
    registerRequest: (state) => {
        state.loading = true;
    },
    registerSuccess: (state) => {
        state.loading = false;
    },
    registerError: (state) => {
        state.loading = false;
    },
    logout: (state) => {
        state.auth = null;
    }
};
// actions
const actions = {
    register: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            commit("registerRequest");
            axios
                .post("/api/account", payload)
                .then(response => {
                commit("registerSuccess");
                resolve(response);
            })
                .catch(error => {
                commit("registerError");
                reject(error.response);
            });
        });
    },
    login: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            commit("loginRequest");
            axios
                .post("/api/token", payload)
                .then(response => {
                const auth = response.data;
                axios.defaults.headers.common["Authorization"] = `Bearer ${auth.access_token}`;
                commit("loginSuccess", auth);
                commit("hideAuthModal");
                resolve(response);
            })
                .catch(error => {
                commit("loginError");
                delete axios.defaults.headers.common["Authorization"];
                reject(error.response);
            });
        });
    },
    logout: ({ commit }) => {
        commit("logout");
        delete axios.defaults.headers.common["Authorization"];
    }
};
export class AuthModule {
    constructor() {
        this.namespaced = true;
        this.getters = getters;
        this.mutations = mutations;
        this.actions = actions;
        this.state = new State();
    }
}
//# sourceMappingURL=auth.module.js.map