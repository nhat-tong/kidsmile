var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import FormInputComponent from '../../shared/form/form-input/form-input.component.vue';
import { Product } from '../../model/Product';
import FormTextAreaComponent from '../../shared/form/form-textarea/form-textarea.component.vue';
import FormMultiSelectComponent from '../../shared/form/form-multiselect/form-multiselect.component.vue';
import axios from 'axios';
import FormTypeaheadComponent from '../../shared/form/form-typeahead/form-typeahead.component.vue';
import VariantModalComponent from './variant-modal.component.vue';
let CreateProductComponent = class CreateProductComponent extends Vue {
    constructor() {
        super();
        this.product = new Product();
        this.brands = [];
        this.os = [];
        this.features = [];
        this.colours = [];
        this.storage = [];
        this.variantsError = null;
    }
    setData(data) {
        this.brands = data.brands;
        this.os = data.os;
        this.features = data.features;
        this.colours = data.colours;
        this.storage = data.storage;
    }
    addVariant(variant) {
        this.product.variants.push(variant);
    }
    save() {
        if (this.product.variants.length <= 0) {
            this.variantsError = "You must add at least one product variant.";
        }
        else {
            this.variantsError = null;
        }
        this.$validator.validateAll().then(result => {
            if (result && !this.variantsError) {
                axios
                    .post("/product", this.product)
                    .then(response => {
                    this.$router.push("/admin/product");
                })
                    .catch(error => {
                    //handle server side validation
                    console.log(error.data);
                });
            }
        });
    }
};
CreateProductComponent = __decorate([
    Component({
        components: {
            'form-input': FormInputComponent,
            'form-text-area': FormTextAreaComponent,
            'form-multi-select': FormMultiSelectComponent,
            'form-typeahead': FormTypeaheadComponent,
            'add-variant-modal': VariantModalComponent
        },
        beforeRouteEnter(to, from, next) {
            axios.get('/filter').then(response => {
                next(vm => vm.setData(response.data));
            });
        }
    })
], CreateProductComponent);
export default CreateProductComponent;
//# sourceMappingURL=create-product.component.js.map