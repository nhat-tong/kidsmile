var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
let ProductSortComponent = class ProductSortComponent extends Vue {
    constructor() {
        super();
        this.items = [
            "Cost (Low to high)",
            "Cost (High to low)",
            "Name (A - Z)",
            "Name (Z - A)"
        ];
    }
    get selected() {
        return this.$route.query.sort || 0;
    }
    select(index) {
        if (index === 0) {
            let query = Object.assign({}, this.$route.query);
            delete query.sort;
            this.$router.push({ query: query });
        }
        else {
            let query = Object.assign({}, this.$route.query);
            query.sort = index;
            this.$router.push({ query: query });
        }
    }
};
ProductSortComponent = __decorate([
    Component
], ProductSortComponent);
export default ProductSortComponent;
//# sourceMappingURL=product-sort.component.js.map