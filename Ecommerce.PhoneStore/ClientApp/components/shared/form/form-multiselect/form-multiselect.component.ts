import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import FormInputBaseComponent from '../form-input-base.component.vue';

@Component({
    components: {
        'form-input-base': FormInputBaseComponent
    }
})
export default class FormMultiSelectComponent extends FormInputBaseComponent {
    @Prop({ type: Array, required: true })
    items: any;
    open: boolean = false;

    constructor() {
        super();
    }

    focus() {
        this.open = true;
        this.$emit("focus");
    }

    blur() {
        this.open = false;
        this.$emit("blur");
    }

    keydown(event) {
        event.preventDefault();
    }

    get text() {
        return (<any>this).value.join(",");
    }

    check(item) {
        var current = Object.assign([], (<any>this).value);
        var index = current.indexOf(item);

        if (index > -1) {
            current.splice(index, 1);
        } else {
            current.push(item);
        }

        this.$emit("input", current);
    }

    isChecked(item) {
        return (<any>this).value.some(s => s === item);
    }
}