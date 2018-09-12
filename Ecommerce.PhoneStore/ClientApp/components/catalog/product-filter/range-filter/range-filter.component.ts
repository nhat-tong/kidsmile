import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import VueSlider from 'vue-slider-component';

@Component({
    components: {
        'vue-slider': VueSlider
    }
})
export default class RangeFilterComponent extends Vue {
    @Prop({ type: Number, required: true })
    min: number;
    @Prop({ type: Number, required: true })
    max: number;
    @Prop({ type: Number })
    interval: number;
    @Prop({ required: true })
    formatter: any;
    @Prop({ type: String, required: true })
    minQueryKey: string;
    @Prop({ type: String, required: true })
    maxQueryKey: string;

    constructor() {
        super();
    }

    get value() {
        return [
            this.$route.query[this.minQueryKey] || this.min,
            this.$route.query[this.maxQueryKey] || this.max
        ];
    }

    filter(values) {
        let query = Object.assign({}, this.$route.query);
        query[this.minQueryKey] = values[0];
        query[this.maxQueryKey] = values[1];

        this.$router.push({ query: query });
    }
}