import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import OrderListComponent from '../../shared/order-list/order-list.component.vue';
import { Next } from 'vue-router';
import axios from 'axios';

@Component({
    components: {
        'order-list': OrderListComponent
    },
    beforeRouteEnter(to, from, next: Next<AdminOrderComponent>) {
        axios.get('/order').then(response => {
            next(vm => vm.setData(response.data));
        });
    }
})
export default class AdminOrderComponent extends Vue {
    orders: any = [];

    constructor() {
        super();
    }

    setData(orders) {
        this.orders = orders;
    }
}