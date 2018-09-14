import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import { Next } from 'vue-router';
import axios from 'axios';
import _ from 'lodash';
import GalleryComponent from '../shared/gallery.component.vue';

@Component({
    components: {
        'gallery': GalleryComponent
    },
    // https://github.com/vuejs/vue-router/issues/992
    beforeRouteEnter(to, from, next: Next<ProductDetailComponent>) {
        axios.get(`/product/${to.params.slug}`)
            .then(response =>
            {
                // https://github.com/vuejs/vue-router/issues/1144
                next(vm => {
                    vm.setData(response.data);
                    vm.compute();
                });
            });
    }
})
export default class ProductDetailComponent extends Vue {
    product: any = {};
    colours: any = [];
    colour: number = 0;
    storages: any = [];
    capacity: number = 0;
    variant: any = {};

    open: boolean = false;
    index: number = 0;

    @Watch('colour')
    onColourChanged(newValue: number, oldValue: number) {
        this.computeStorage();
        this.computeProductVariant();
    }

    @Watch('capacity')
    onStorageChanged(newValue: number, oldValue: number) {
        this.computeProductVariant();
    }

    constructor() {
        super();
    }

    computeColours() {
        this.colours = _.uniqBy(
            this.product.variants.map(v => {
                return {
                    value: v.colourId,
                    text: v.colour
                };
            }),
            "value"
        );

        this.colour = this.colours[0].value;
    }

    computeStorage() {
        this.storages = this.product.variants
            .filter(v => {
                return v.colourId === this.colour;
            })
            .map(v => {
                return {
                    value: v.storageId,
                    text: v.capacity
                };
            });

        let storageIds = this.storages.map(x => { return x.value; });
        this.capacity = storageIds.indexOf(this.capacity) > -1 ? this.capacity : storageIds[0];
    }

    computeProductVariant() {
        this.variant = this.product.variants.find(
            v => v.colourId == this.colour && v.storageId == this.capacity
        );
    }

    setData(product) {
        this.product = product;
    }

    compute() {
        this.computeColours();
        this.computeStorage();
        this.computeProductVariant();
    }

    addProductToCart() {
        this.$store.dispatch('cartModule/addProductToCart', this.variant);
        this.$toastr('success', 'Product added to cart successfully.');
    }

    openGallery(index) {
        this.index = index;
        this.open = true;
    }

    back() {
        this.$router.go(-1);
    }
}