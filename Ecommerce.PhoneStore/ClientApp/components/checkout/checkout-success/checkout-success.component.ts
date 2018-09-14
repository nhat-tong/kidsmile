import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class CheckoutSuccessComponent extends Vue {
    @Prop({ type: Object, required: true })
    order: any;

    constructor() {
        super();
    }
}