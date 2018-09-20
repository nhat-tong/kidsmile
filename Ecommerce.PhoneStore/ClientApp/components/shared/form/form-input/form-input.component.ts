import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import FormInputBaseComponent from '../form-input-base.component.vue';

@Component({
    components: {
        'form-input-base': FormInputBaseComponent 
    }
})
export default class FormInputComponent extends FormInputBaseComponent {
    @Prop({ type: String, default: 'text' })
    type: string;
    @Prop({ type: String })
    prepend: string;
    @Prop({ type: String })
    append: string;

    constructor() {
        super();
    }
}