import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import _ from 'lodash';

@Component
export default class SearchBarComponent extends Vue {
    searchTerm: string = '';
    search: any;

    @Watch('searchTerm')
    onPropertyChanged(value: string, oldValue: string) {
        this.search();
    }

    constructor() {
        super();
    }

    created() {
        let vm = this;
        vm.searchTerm = vm.$route.query['q'] || '';
        this.search = _.debounce(function () {
            let query = Object.assign({}, vm.$route.query);

            if (vm.searchTerm.trim()) {
                query.q = vm.searchTerm;
            } else {
                delete query.q;
            }

            vm.$router.push({ query: query });
        }, 500);
    }
}