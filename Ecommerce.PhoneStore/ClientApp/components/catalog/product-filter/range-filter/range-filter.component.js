var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import VueSlider from 'vue-slider-component';
let RangeFilterComponent = class RangeFilterComponent extends Vue {
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
};
__decorate([
    Prop({ type: Number, required: true })
], RangeFilterComponent.prototype, "min", void 0);
__decorate([
    Prop({ type: Number, required: true })
], RangeFilterComponent.prototype, "max", void 0);
__decorate([
    Prop({ type: Number })
], RangeFilterComponent.prototype, "interval", void 0);
__decorate([
    Prop({ required: true })
], RangeFilterComponent.prototype, "formatter", void 0);
__decorate([
    Prop({ type: String, required: true })
], RangeFilterComponent.prototype, "minQueryKey", void 0);
__decorate([
    Prop({ type: String, required: true })
], RangeFilterComponent.prototype, "maxQueryKey", void 0);
RangeFilterComponent = __decorate([
    Component({
        components: {
            'vue-slider': VueSlider
        }
    })
], RangeFilterComponent);
export default RangeFilterComponent;
//# sourceMappingURL=range-filter.component.js.map