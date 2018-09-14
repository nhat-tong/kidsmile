var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
let CheckoutSummaryComponent = class CheckoutSummaryComponent extends Vue {
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
        return this.$store.getters['cartModule/shoppingCartTotal'];
    }
};
CheckoutSummaryComponent = __decorate([
    Component
], CheckoutSummaryComponent);
export default CheckoutSummaryComponent;
//# sourceMappingURL=checkout-summary.component.js.map