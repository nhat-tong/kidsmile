import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Next } from 'vue-router';
import axios from 'axios';

@Component({
    beforeRouteEnter(to, from, next: Next<AdminProductComponent>) {
        axios.get('/product').then(response => {
            next(vm => vm.setData(response.data));
        });
    }
})
export default class AdminProductComponent extends Vue {
    products: any = [];

    constructor() {
        super();
    }

    setData(products) {
        this.products = products;
    }
}