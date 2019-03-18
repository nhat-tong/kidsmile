var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import FilterAccordionComponent from './filter-accordion/filter-accordion.component.vue';
import MultiSelectFilterComponent from './multi-select-filter/multi-select-filter.component.vue';
import RangeFilterComponent from './range-filter/range-filter.component.vue';
let ProductFilterComponent = class ProductFilterComponent extends Vue {
    constructor() {
        super();
    }
    priceFormatter(value) {
        if (value == 0)
            return '0';
        if (value == 1000)
            return '1.000.000 VND';
        return `${value}.000 VND`;
    }
    reset() {
        this.$router.push({ query: {} });
    }
};
__decorate([
    Prop({ type: Object, required: true })
], ProductFilterComponent.prototype, "filters", void 0);
ProductFilterComponent = __decorate([
    Component({
        components: {
            'filter-accordion': FilterAccordionComponent,
            'multi-select-filter': MultiSelectFilterComponent,
            'range-filter': RangeFilterComponent
        }
    })
], ProductFilterComponent);
export default ProductFilterComponent;
//# sourceMappingURL=product-filter.component.js.map