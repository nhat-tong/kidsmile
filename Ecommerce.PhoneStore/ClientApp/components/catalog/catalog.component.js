var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import axios from 'axios';
import ProductListComponent from './product-list/product-list.component.vue';
import SearchBarComponent from './search-bar/search-bar.component.vue';
import ProductSortComponent from './product-sort/product-sort.component.vue';
import ProductFilterComponent from './product-filter/product-filter.component.vue';
let CatalogComponent = class CatalogComponent extends Vue {
    constructor() {
        super();
        this.products = [];
        this.filters = {
            brands: [],
            storage: [],
            colours: [],
            os: [],
            features: []
        };
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
};
CatalogComponent = __decorate([
    Component({
        components: {
            'search-bar': SearchBarComponent,
            'product-list': ProductListComponent,
            'product-sort': ProductSortComponent,
            'product-filter': ProductFilterComponent
        },
        beforeRouteEnter(to, from, next) {
            // Ref: https://github.com/vuejs/vue-router/issues/1863
            axios
                .all([
                axios.get("/product", { params: to.query }),
                axios.get("/filter")
            ])
                .then(axios.spread((products, filters) => {
                next(vm => vm.setData(products.data, filters.data));
            }));
        },
        beforeRouteUpdate(to, from, next) {
            let vm = this;
            axios.get("/product", { params: to.query }).then(response => {
                vm.products = response.data;
                next();
            });
        }
    })
], CatalogComponent);
export default CatalogComponent;
//# sourceMappingURL=catalog.component.js.map