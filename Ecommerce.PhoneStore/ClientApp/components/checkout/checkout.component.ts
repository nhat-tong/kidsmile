import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import CheckoutSummaryComponent from './checkout-summary/checkout-summary.component.vue';
import CheckoutFormComponent from './checkout-form/checkout-form.component.vue';
import CheckoutSuccessComponent from './checkout-success/checkout-success.component.vue';

@Component({
    components: {
        'checkout-summary': CheckoutSummaryComponent,
        'checkout-form': CheckoutFormComponent,
        'checkout-success': CheckoutSuccessComponent
    }
})
export default class CheckoutComponent extends Vue {
    order: any;
    success: boolean = false;

    constructor() {
        super();
    }

    onSuccess(order) {
        this.order = order;
        this.success = true;
    }
}