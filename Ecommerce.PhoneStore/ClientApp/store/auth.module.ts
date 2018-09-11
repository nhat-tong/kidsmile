import { AuthState } from './state';
import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';
import axios from "axios";

// getters
const getters: GetterTree<AuthState, any> = {
    isAuthenticated: (state: AuthState) => {
        return state.auth !== null && state.auth.access_token !== null;
    },
    isInRole: (state: AuthState, getters) => role => {
        const result = getters.isAuthenticated && state.auth.roles.indexOf(role) > -1;
        return result;
    }
}

// mutations
const mutations: MutationTree<AuthState> = {
    showAuthModal: (state: AuthState) => {
        state.showAuthModal = true;
    },
    hideAuthModal: (state: AuthState) => {
        state.showAuthModal = false;
    },
    loginRequest: (state: AuthState) => {
        state.loading = true;
    },
    loginSuccess: (state: AuthState, payload) => {
        state.auth = payload;
        state.loading = false;
    },
    loginError: (state: AuthState) => {
        state.loading = false;
    },
    registerRequest: (state: AuthState) => {
        state.loading = true;
    },
    registerSuccess: (state: AuthState) => {
        state.loading = false;
    },
    registerError: (state: AuthState) => {
        state.loading = false;
    },
    logout: (state: AuthState) => {
        state.auth = null;
    },
    restoreState: (state: AuthState, payload) => {
        Object.assign(state, payload);
    }
}

// actions
const actions: ActionTree<AuthState, any> = {
    register: ({ commit }, payload) => {
        return new Promise((resolve, reject) => {
            commit("registerRequest");
            axios
                .post("/account/register", payload)
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
                .post("/account/login", payload)
                .then(response => {
                    const auth = response.data;
                    axios.defaults.headers.common["Authorization"] = `Bearer ${
                        auth.access_token
                        }`;
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
}

export class AuthModule implements Module<AuthState, any> {
    namespaced: boolean = true;

    state: AuthState;
    getters = getters;
    mutations = mutations;
    actions = actions;

    constructor() {
        this.state = new AuthState();
    }
}