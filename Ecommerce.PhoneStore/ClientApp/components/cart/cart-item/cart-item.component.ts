import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class CartItemComponent extends Vue {
    @Prop({ type: Object, required: true })
    item: any;

    constructor() {
        super();
    }

    setProductQuantity(value) {
        this.$store.dispatch('cartModule/setProductQuantity', { quantity: parseInt(value), product: this.item });
    }

    removeProductFromCart() {
        this.$store.dispatch('cartModule/removeProductFromCart', this.item);
    }
}