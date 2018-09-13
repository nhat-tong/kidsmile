var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';
import axios from 'axios';
import _ from 'lodash';
import GalleryComponent from '../shared/gallery.component.vue';
let ProductDetailComponent = class ProductDetailComponent extends Vue {
    constructor() {
        super();
        this.product = {};
        this.colours = [];
        this.colour = 0;
        this.storages = [];
        this.capacity = 0;
        this.variant = {};
        this.open = false;
        this.index = 0;
    }
    onColourChanged(newValue, oldValue) {
        this.computeStorage();
        this.computeProductVariant();
    }
    onStorageChanged(newValue, oldValue) {
        this.computeProductVariant();
    }
    computeColours() {
        this.colours = _.uniqBy(this.product.variants.map(v => {
            return {
                value: v.colourId,
                text: v.colour
            };
        }), "value");
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
        this.variant = this.product.variants.find(v => v.colourId == this.colour && v.storageId == this.capacity);
    }
    setData(product) {
        this.product = product;
    }
    compute() {
        this.computeColours();
        this.computeStorage();
        this.computeProductVariant();
    }
    addProductToCart() { }
    openGallery() {
        this.open = true;
        this.index = 0;
    }
    back() { }
};
__decorate([
    Watch('colour')
], ProductDetailComponent.prototype, "onColourChanged", null);
__decorate([
    Watch('capacity')
], ProductDetailComponent.prototype, "onStorageChanged", null);
ProductDetailComponent = __decorate([
    Component({
        components: {
            'gallery': GalleryComponent
        },
        // https://github.com/vuejs/vue-router/issues/992
        beforeRouteEnter(to, from, next) {
            axios.get(`/product/${to.params.slug}`)
                .then(response => {
                // https://github.com/vuejs/vue-router/issues/1144
                next(vm => {
                    vm.setData(response.data);
                    vm.compute();
                });
            });
        }
    })
], ProductDetailComponent);
export default ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map