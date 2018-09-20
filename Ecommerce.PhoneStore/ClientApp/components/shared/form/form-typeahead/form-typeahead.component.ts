import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import FormInputBaseComponent from '../form-input-base.component.vue';

@Component({
    components: {
        'form-input-base': FormInputBaseComponent
    }
})
export default class FormTypeaheadComponent extends FormInputBaseComponent {
    @Prop({ type: Array, required: true })
    items: Array<string>;
    current: number = -1;
    focused: boolean = false;

    constructor() {
        super();
    }

    get matches() {
        return this.items.filter(str => {
            return str.toLowerCase().indexOf((<any>this).value.toLowerCase()) >= 0;
        });
    }

    get open() {
        return (
            (<any>this).value.length > 0 &&
            this.focused &&
            !this.items.some(item => item === (<any>this).value)
        );
    }

    input(event) {
        this.$emit("input", event.target.value);

        this.items.map(item => {
            if (item.toLowerCase() === event.target.value.toLowerCase()) {
                this.$emit("input", item);
            }
        });
    }

    click(index) {
        this.$emit("input", this.matches[index]);
        //this.$refs.input.$el.focus();
    }

    enter() {
        if (this.current >= 0) {
            this.$emit("input", this.matches[this.current]);
        }
    }

    up() {
        if (this.current >= 0) this.current--;
    }

    down() {
        if (this.current < this.matches.length - 1) this.current++;
    }

    focus() {
        this.focused = true;
        this.$emit("focus");
    }

    blur() {
        this.focused = false;
        this.$emit("blur");
    }
}