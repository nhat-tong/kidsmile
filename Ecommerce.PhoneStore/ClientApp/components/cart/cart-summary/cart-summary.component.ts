import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class CartSummaryComponent extends Vue {
    constructor() {
        super();
    }

    get count() {
        return this.$store.getters['cartModule/shoppingCartItemCount'];
    }

    get total() {
        return this.$store.getters['cartModule/shoppingCartTotal'];
    }
}
