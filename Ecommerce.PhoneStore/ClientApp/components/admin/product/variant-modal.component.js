var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import FormInputComponent from '../../shared/form/form-input/form-input.component.vue';
import FormTypeaheadComponent from '../../shared/form/form-typeahead/form-typeahead.component.vue';
let VariantModalComponent = class VariantModalComponent extends Vue {
    constructor() {
        super();
        this.colour = '';
        this.capacity = '';
        this.price = '';
    }
    submit() {
        this.$validator.validateAll().then(result => {
            if (result) {
                const payload = {
                    colour: this.colour,
                    storage: this.capacity,
                    price: this.price
                };
                this.$emit("submit", payload);
                this.$refs.modal.hide();
                this.colour = "";
                this.capacity = "";
                this.price = "";
            }
        });
    }
};
__decorate([
    Prop({ type: Array, required: true })
], VariantModalComponent.prototype, "colours", void 0);
__decorate([
    Prop({ type: Array, required: true })
], VariantModalComponent.prototype, "storage", void 0);
VariantModalComponent = __decorate([
    Component({
        components: {
            'form-input': FormInputComponent,
            'form-typeahead': FormTypeaheadComponent
        }
    })
], VariantModalComponent);
export default VariantModalComponent;
//# sourceMappingURL=variant-modal.component.js.map