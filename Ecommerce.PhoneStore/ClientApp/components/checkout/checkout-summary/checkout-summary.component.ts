import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CheckoutSummaryComponent extends Vue {
    constructor() {
        super();
    }

    get items() {
        return this.$store.state.cartModule.cart;
    }

    get itemCount() {
        return this.$store.getters['cartModule/shoppingCartItemCount'];
    }

    get total() {
        return this.$store.getters['cartModule/shoppingCartTotal']
    }
}