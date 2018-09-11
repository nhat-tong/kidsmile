import { CartState } from './state';
// getters
const getters = {
    shoppingCartTotal: (state) => {
        const reducer = (accumulator, cartItem) => accumulator + cartItem.price * cartItem.quantity;
        return state.cart.reduce(reducer, 0);
    },
    shoppingCartItemCount: (state) => {
        const reducer = (accumulator, cartItem) => accumulator + cartItem.quantity;
        return state.cart.reduce(reducer, 0);
    }
};
// mutations
const mutations = {
    addProductToCart: (state, product) => {
        product.quantity = 1;
        state.cart.push(product);
    },
    updateProductQuantity: (state, product) => {
        const index = state.cart.indexOf(product);
        let cartItem = state.cart[index];
        cartItem.quantity++;
        state.cart.splice(index, 1, Object.assign({}, cartItem));
    },
    removeProductFromCart: (state, product) => {
        const index = state.cart.indexOf(product);
        state.cart.splice(index, 1);
    },
    setProductQuantity: (state, payload) => {
        const index = state.cart.indexOf(payload.product);
        let cartItem = state.cart[index];
        cartItem.quantity = payload.quantity;
        state.cart.splice(index, 1, Object.assign({}, cartItem));
    },
    clearCartItems: (state) => {
        state.cart = [];
    },
    restoreState: (state, payload) => {
        Object.assign(state, payload);
    }
};
// actions
const actions = {
    addProductToCart: ({ state, commit }, product) => {
        const exists = state.cart.find(i => i.productId === product.productId &&
            i.colourId === product.colourId &&
            i.storageId === product.storageId);
        if (exists) {
            commit("updateProductQuantity", product);
        }
        else {
            commit("addProductToCart", product);
        }
    },
    removeProductFromCart: ({ commit }, product) => {
        commit("removeProductFromCart", product);
    },
    setProductQuantity: ({ commit }, payload) => {
        if (payload.quantity > 0) {
            commit("setProductQuantity", payload);
        }
        else {
            commit("removeProductFromCart", payload.product);
        }
    }
};
export class CartModule {
    constructor() {
        this.namespaced = true;
        this.getters = getters;
        this.mutations = mutations;
        this.actions = actions;
        this.state = new CartState();
    }
}
//# sourceMappingURL=cart.module.js.map