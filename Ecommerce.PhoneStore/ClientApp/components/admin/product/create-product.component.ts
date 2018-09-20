import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import FormInputComponent from '../../shared/form/form-input/form-input.component.vue';
import { Product } from '../../model/Product';
import FormTextAreaComponent from '../../shared/form/form-textarea/form-textarea.component.vue';
import FormMultiSelectComponent from '../../shared/form/form-multiselect/form-multiselect.component.vue';
import { Next } from 'vue-router';
import axios from 'axios';
import FormTypeaheadComponent from '../../shared/form/form-typeahead/form-typeahead.component.vue';
import VariantModalComponent from './variant-modal.component.vue';

@Component({
    components: {
        'form-input': FormInputComponent,
        'form-text-area': FormTextAreaComponent,
        'form-multi-select': FormMultiSelectComponent,
        'form-typeahead': FormTypeaheadComponent,
        'add-variant-modal': VariantModalComponent
    },
    beforeRouteEnter(to, from, next: Next<CreateProductComponent>) {
        axios.get('/filter').then(response => {
            next(vm => vm.setData(response.data));
        });
    }
})
export default class CreateProductComponent extends Vue {
    product: Product = new Product();
    brands: Array<string> = [];
    os: Array<string> = [];
    features: Array<string> = [];
    colours: Array<string> = [];
    storage: Array<string> = [];
    variantsError: any = null;

    constructor() {
        super();
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
        } else {
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
}