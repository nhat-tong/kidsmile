import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class FormInputBaseComponent extends Vue {
    @Prop()
    label: string;
    @Prop()
    name: string;
    @Prop()
    value: any;
    @Prop()
    error: string;

    constructor() {
        super();
    }

    get classes() {
        return {
            "form-control": true,
            "is-valid": !!!this.error && this.value.length > 0,
            "is-invalid": !!this.error
        };
    }
}