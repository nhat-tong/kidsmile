import { State } from './state';
import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';
import axios from "axios";

// getters
const getters: GetterTree<State, any> = {
    isAuthenticated: (state: State) => {
        return state.auth !== null && state.auth.access_token !== null;
    },
    isInRole: (state: State, getters) => role => {
        const result = getters.isAuthenticated && state.auth.roles.indexOf(role) > -1;
        return result;
    }
}

// mutations
const mutations: MutationTree<State> = {
    showAuthModal: (state : State) => {
        state.showAuthModal = true;
    },
    hideAuthModal: (state: State) => {
        state.showAuthModal = false;
    },
    loginRequest: (state: State) => {
        state.loading = true;
    },
    loginSuccess: (state: State, payload) => {
        state.auth = payload;
        state.loading = false;
    },
    loginError: (state: State) => {
        state.loading = false;
    },
    registerRequest: (state: State) => {
        state.loading = true;
    },
    registerSuccess: (state: State) => {
        state.loading = false;
    },
    registerError: (state: State) => {
        state.loading = false;
    },
    logout: (state: State) => {
        state.auth = null;
    }
}

// actions
const actions: ActionTree<State, any> = {
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

export class AuthModule implements Module<State, any> {
    namespaced: boolean = true;

    state: State;
    getters = getters;
    mutations = mutations;
    actions = actions;

    constructor() {
        this.state = new State();
    }
}