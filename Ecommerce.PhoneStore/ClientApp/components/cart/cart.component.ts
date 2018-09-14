import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CartItemComponent from './cart-item/cart-item.component.vue';

@Component({
    components: {
        'cart-item': CartItemComponent
    }
})
export default class CartComponent extends Vue {
    constructor() {
        super();
    }

    get items() {
        return this.$store.state.cartModule.cart;
    }

    get total() {
        return this.$store.getters['cartModule/shoppingCartTotal'];
    }

    continueShopping() {
        this.$router.push('/products');
    }

    checkout() {
        this.$router.push('/checkout');
    }
}