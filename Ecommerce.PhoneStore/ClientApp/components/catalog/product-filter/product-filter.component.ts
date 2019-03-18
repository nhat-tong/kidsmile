import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import FilterAccordionComponent from './filter-accordion/filter-accordion.component.vue';
import MultiSelectFilterComponent from './multi-select-filter/multi-select-filter.component.vue';
import RangeFilterComponent from './range-filter/range-filter.component.vue';

@Component({
    components: {
        'filter-accordion': FilterAccordionComponent,
        'multi-select-filter': MultiSelectFilterComponent,
        'range-filter': RangeFilterComponent
    }
})
export default class ProductFilterComponent extends Vue {
    @Prop({ type: Object, required: true })
    filters: any;

    constructor() {
        super();
    }

    priceFormatter(value) {
        if (value == 0) return '0';
        if (value == 1000) return '1.000.000 VND';
        return `${value}.000 VND`;
    }

    reset() {
        this.$router.push({ query: {} });
    }
}