var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
let CartItemComponent = class CartItemComponent extends Vue {
    constructor() {
        super();
    }
    setProductQuantity(value) {
        this.$store.dispatch('cartModule/setProductQuantity', { quantity: parseInt(value), product: this.item });
    }
    removeProductFromCart() {
        this.$store.dispatch('cartModule/removeProductFromCart', this.item);
    }
};
__decorate([
    Prop({ type: Object, required: true })
], CartItemComponent.prototype, "item", void 0);
CartItemComponent = __decorate([
    Component
], CartItemComponent);
export default CartItemComponent;
//# sourceMappingURL=cart-item.component.js.map