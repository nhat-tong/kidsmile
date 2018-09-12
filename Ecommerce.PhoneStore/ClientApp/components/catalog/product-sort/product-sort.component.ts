import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class ProductSortComponent extends Vue {
    items: any = [
        "Cost (Low to high)",
        "Cost (High to low)",
        "Name (A - Z)",
        "Name (Z - A)"
    ];

    get selected() {
        return this.$route.query.sort || 0;
    }

    constructor() {
        super();
    }

    select(index) {
        if (index === 0) {
            let query = Object.assign({}, this.$route.query);
            delete query.sort;

            this.$router.push({ query: query });
        } else {
            let query = Object.assign({}, this.$route.query);
            query.sort = index;

            this.$router.push({ query: query });
        }
    }
}