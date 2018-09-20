import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import FormInputComponent from '../../shared/form/form-input/form-input.component.vue';
import FormTypeaheadComponent from '../../shared/form/form-typeahead/form-typeahead.component.vue';

@Component({
    components: {
        'form-input': FormInputComponent,
        'form-typeahead': FormTypeaheadComponent
    }
})
export default class VariantModalComponent extends Vue {
    @Prop({ type: Array, required: true })
    colours: Array<string>;
    @Prop({ type: Array, required: true })
    storage: Array<string>;

    colour: string = '';
    capacity: string = '';
    price: string = '';

    constructor() {
        super();
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
                (<any>this.$refs.modal).hide();
                this.colour = "";
                this.capacity = "";
                this.price = "";
            }
        });
    }
}