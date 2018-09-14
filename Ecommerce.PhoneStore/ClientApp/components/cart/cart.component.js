var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CartItemComponent from './cart-item/cart-item.component.vue';
let CartComponent = class CartComponent extends Vue {
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
};
CartComponent = __decorate([
    Component({
        components: {
            'cart-item': CartItemComponent
        }
    })
], CartComponent);
export default CartComponent;
//# sourceMappingURL=cart.component.js.map