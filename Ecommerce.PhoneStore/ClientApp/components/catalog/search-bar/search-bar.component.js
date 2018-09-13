var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import _ from 'lodash';
let SearchBarComponent = class SearchBarComponent extends Vue {
    constructor() {
        super();
        this.searchTerm = '';
    }
    onPropertyChanged(value, oldValue) {
        this.search();
    }
    created() {
        let vm = this;
        vm.searchTerm = vm.$route.query['q'] || '';
        this.search = _.debounce(function () {
            let query = Object.assign({}, vm.$route.query);
            if (vm.searchTerm.trim()) {
                query.q = vm.searchTerm;
            }
            else {
                delete query.q;
            }
            vm.$router.push({ query: query });
        }, 500);
    }
};
__decorate([
    Watch('searchTerm')
], SearchBarComponent.prototype, "onPropertyChanged", null);
SearchBarComponent = __decorate([
    Component
], SearchBarComponent);
export default SearchBarComponent;
//# sourceMappingURL=search-bar.component.js.map