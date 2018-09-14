import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import OrderListComponent from '../shared/order-list/order-list.component.vue';
import axios from 'axios';
import { Next } from 'vue-router';

@Component({
    components: {
        'order-list': OrderListComponent
    },
    beforeRouteEnter(to, from, next: Next<AccountComponent>) {
        axios.get('/order').then(response => {
            next(vm => vm.setData(response.data));
        });
    }
})
export default class AccountComponent extends Vue {
    orders: any = [];

    constructor() {
        super();
    }

    setData(orders) {
        this.orders = orders;
    }
}