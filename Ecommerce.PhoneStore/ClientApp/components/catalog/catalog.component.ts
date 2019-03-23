import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';
import { Next } from 'vue-router';

import ProductListComponent from './product-list/product-list.component.vue';
import SearchBarComponent from './search-bar/search-bar.component.vue';
import ProductSortComponent from './product-sort/product-sort.component.vue';
import ProductFilterComponent from './product-filter/product-filter.component.vue';

@Component({
    components: {
        'search-bar': SearchBarComponent,
        'product-list': ProductListComponent,
        'product-sort': ProductSortComponent,
        'product-filter': ProductFilterComponent
    },
    beforeRouteEnter(to, from, next: Next<CatalogComponent>) {
        // Ref: https://github.com/vuejs/vue-router/issues/1863
        axios
            .all([
                axios.get("/product", { params: to.query }),
                axios.get("/filter")
            ])
            .then(
                axios.spread((products, filters) => {
                    next(vm => vm.setData(products.data, filters.data));
                })
            );
    },
    beforeRouteUpdate(to, from, next: Next<CatalogComponent>) {
        let vm = this as CatalogComponent;
        axios.get("/product", { params: to.query }).then(response => {
            vm.products = response.data;
            next();
        });
    }
})
export default class CatalogComponent extends Vue {
    products: any = [];
    filters: any = {
        brands: [],
        storage: [],
        colours: [],
        os: [],
        features: []
    }
    constructor() {
        super();
    }

    get sort() {
        return this.$route.query.sort || 0;
    }

    get sortedProducts() {
        switch (this.sort) {
            case 1: // descending price
                return this.products.sort((a, b) => {
                    return a.price > b.price ? -1 : 1;
                });
            case 2: // ascending name
                return this.products.sort((a, b) => {
                    return a.name > b.name ? -1 : 1;
                });
            case 3: // descending name
                return this.products.sort((a, b) => {
                    return a.name > b.name ? 1 : -1;
                });
            default: // ascending price
                return this.products.sort((a, b) => {
                    return a.price > b.price ? 1 : -1;
                });
        }
    }

    setData(products, filters) {
        this.products = products;
        this.filters = filters;
    }
}