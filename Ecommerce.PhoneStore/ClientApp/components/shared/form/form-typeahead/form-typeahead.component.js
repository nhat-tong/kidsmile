var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop } from 'vue-property-decorator';
import FormInputBaseComponent from '../form-input-base.component.vue';
let FormTypeaheadComponent = class FormTypeaheadComponent extends FormInputBaseComponent {
    constructor() {
        super();
        this.current = -1;
        this.focused = false;
    }
    get matches() {
        return this.items.filter(str => {
            return str.toLowerCase().indexOf(this.value.toLowerCase()) >= 0;
        });
    }
    get open() {
        return (this.value.length > 0 &&
            this.focused &&
            !this.items.some(item => item === this.value));
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
        if (this.current >= 0)
            this.current--;
    }
    down() {
        if (this.current < this.matches.length - 1)
            this.current++;
    }
    focus() {
        this.focused = true;
        this.$emit("focus");
    }
    blur() {
        this.focused = false;
        this.$emit("blur");
    }
};
__decorate([
    Prop({ type: Array, required: true })
], FormTypeaheadComponent.prototype, "items", void 0);
FormTypeaheadComponent = __decorate([
    Component({
        components: {
            'form-input-base': FormInputBaseComponent
        }
    })
], FormTypeaheadComponent);
export default FormTypeaheadComponent;
//# sourceMappingURL=form-typeahead.component.js.map