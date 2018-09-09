import { State } from './state';
import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';
import axios from "axios";

// getters
const getters: GetterTree<State, any> = {
    shoppingCartTotal: (state: State) => {
        const reducer = (accumulator, cartItem) =>
            accumulator + cartItem.price * cartItem.quantity;

        return state.cart.reduce(reducer, 0);
    },
    shoppingCartItemCount: (state: State) => {
        const reducer = (accumulator, cartItem) => accumulator + cartItem.quantity;
        return state.cart.reduce(reducer, 0);
    }
}

// mutations
const mutations: MutationTree<State> = {
    addProductToCart: (state: State, product) => {
        product.quantity = 1;
        state.cart.push(product);
    },
    updateProductQuantity: (state: State, product) => {
        const index = state.cart.indexOf(product);
        let cartItem = state.cart[index];
        cartItem.quantity++;

        state.cart.splice(index, 1, Object.assign({}, cartItem));
    },
    removeProductFromCart: (state: State, product) => {
        const index = state.cart.indexOf(product);
        state.cart.splice(index, 1);
    },
    setProductQuantity: (state: State, payload) => {
        const index = state.cart.indexOf(payload.product);
        let cartItem = state.cart[index];
        cartItem.quantity = payload.quantity;

        state.cart.splice(index, 1, Object.assign({}, cartItem));
    },
    clearCartItems: (state: State) => {
        state.cart = [];
    },
    initialise: (state: State, payload) => {
        Object.assign(state, payload);
    }
}

// actions
const actions: ActionTree<State, any> = {
    addProductToCart: ({ state, commit }, product) => {
        const exists = state.cart.find(
            i =>
                i.productId === product.productId &&
                i.colourId === product.colourId &&
                i.storageId === product.storageId
        );

        if (exists) {
            commit("updateProductQuantity", product);
        } else {
            commit("addProductToCart", product);
        }
    },
    removeProductFromCart: ({ commit }, product) => {
        commit("removeProductFromCart", product);
    },
    setProductQuantity: ({ commit }, payload) => {
        if (payload.quantity > 0) {
            commit("setProductQuantity", payload);
        } else {
            commit("removeProductFromCart", payload.product);
        }
    }
}

export class CartModule implements Module<State, any> {
    namespaced: boolean = true;

    state: State;
    getters = getters;
    mutations = mutations;
    actions = actions;

    constructor() {
        this.state = new State();
    }
}