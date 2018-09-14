import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class OrderListComponent extends Vue {
    @Prop({ type: Array, required: true })
    orders: any;

    constructor() {
        super();
    }

    get isAdmin() {
        return this.$store.getters['authModule/isInRole']('Admin');
    }
}