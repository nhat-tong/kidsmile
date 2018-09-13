var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
let MultiSelectFilterComponent = class MultiSelectFilterComponent extends Vue {
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
        }
        else {
            split.push(item);
        }
        if (split.length) {
            let joined = split.join("|");
            query[this.queryKey] = joined;
        }
        else {
            delete query[this.queryKey];
        }
        this.$router.push({ query: query });
    }
};
__decorate([
    Prop({ type: Array, required: true })
], MultiSelectFilterComponent.prototype, "items", void 0);
__decorate([
    Prop({ type: String, required: true })
], MultiSelectFilterComponent.prototype, "queryKey", void 0);
MultiSelectFilterComponent = __decorate([
    Component
], MultiSelectFilterComponent);
export default MultiSelectFilterComponent;
//# sourceMappingURL=multi-select-filter.component.js.map