import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import FormInputBaseComponent from '../form-input-base.component.vue';

@Component({
    components: {
        'form-input-base': FormInputBaseComponent
    }
})
export default class FormTextAreaComponent extends FormInputBaseComponent {
    @Prop({ type: Number, default: 3 })
    rows: number;

    constructor() {
        super();
    }
}