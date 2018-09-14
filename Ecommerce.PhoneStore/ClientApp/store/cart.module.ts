import { CartState } from './state';
import { Module, GetterTree, MutationTree, ActionTree } from 'vuex';
import axios from "axios";

// getters
const getters: GetterTree<CartState, any> = {
    shoppingCartTotal: (state: CartState) => {
        const reducer = (accumulator, cartItem) =>
            accumulator + cartItem.price * cartItem.quantity;

        return state.cart.reduce(reducer, 0);
    },
    shoppingCartItemCount: (state: CartState) => {
        const reducer = (accumulator, cartItem) => accumulator + cartItem.quantity;
        return state.cart.reduce(reducer, 0);
    }
}

// mutations
const mutations: MutationTree<CartState> = {
    addProductToCart: (state: CartState, product) => {
        product.quantity = 1;
        state.cart.push(product);
    },
    updateProductQuantity: (state: CartState, product) => {
        const index = state.cart.indexOf(product);
        let cartItem = state.cart[index];
        cartItem.quantity++;

        state.cart.splice(index, 1, Object.assign({}, cartItem));
    },
    removeProductFromCart: (state: CartState, product) => {
        const index = state.cart.indexOf(product);
        state.cart.splice(index, 1);
    },
    setProductQuantity: (state: CartState, payload) => {
        const index = state.cart.indexOf(payload.product);
        let cartItem = state.cart[index];
        cartItem.quantity = payload.quantity;

        state.cart.splice(index, 1, Object.assign({}, cartItem));
    },
    clearCart: (state: CartState) => {
        state.cart = [];
    },
    restoreState: (state: CartState, payload) => {
        Object.assign(state, payload);
    }
}

// actions
const actions: ActionTree<CartState, any> = {
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

export class CartModule implements Module<CartState, any> {
    namespaced: boolean = true;

    state: CartState;
    getters = getters;
    mutations = mutations;
    actions = actions;

    constructor() {
        this.state = new CartState();
    }
}