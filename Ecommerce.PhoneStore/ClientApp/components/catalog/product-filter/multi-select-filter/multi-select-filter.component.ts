import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class MultiSelectFilterComponent extends Vue {
    @Prop({ type: Array, required: true })
    items: Array<string>;

    @Prop({ type: String, required: true })
    queryKey: string;

    constructor() {
        super();
    }

    get selected() {
        return this.$route.query[this.queryKey] || '';
    }

    clear() {
        if (this.selected.length) {
            let query = Object.assign({}, this.$route.query);
            delete query[this.queryKey];

            this.$router.push({ query: query });
        }
    }

    filter(item) {
        let query = Object.assign({}, this.$route.query);
        let split = query[this.queryKey] ? query[this.queryKey].split("|") : [];

        if (split.indexOf(item) > -1) {
            let index = split.indexOf(item);
            split.splice(index, 1);
        } else {
            split.push(item);
        }

        if (split.length) {
            let joined = split.join("|");
            query[this.queryKey] = joined;
        } else {
            delete query[this.queryKey];
        }

        this.$router.push({ query: query });
    }
}