import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class ProductListComponent extends Vue {
    @Prop({ type: Array, required: true })
    products: any;

    constructor() {
        super();
    }

    view(product) {
        this.$router.push(`/products/${product.slug}`);
    }
}