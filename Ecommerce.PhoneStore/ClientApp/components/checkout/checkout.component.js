var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CheckoutSummaryComponent from './checkout-summary/checkout-summary.component.vue';
import CheckoutFormComponent from './checkout-form/checkout-form.component.vue';
import CheckoutSuccessComponent from './checkout-success/checkout-success.component.vue';
let CheckoutComponent = class CheckoutComponent extends Vue {
    constructor() {
        super();
        this.success = false;
    }
    onSuccess(order) {
        this.order = order;
        this.success = true;
    }
};
CheckoutComponent = __decorate([
    Component({
        components: {
            'checkout-summary': CheckoutSummaryComponent,
            'checkout-form': CheckoutFormComponent,
            'checkout-success': CheckoutSuccessComponent
        }
    })
], CheckoutComponent);
export default CheckoutComponent;
//# sourceMappingURL=checkout.component.js.map