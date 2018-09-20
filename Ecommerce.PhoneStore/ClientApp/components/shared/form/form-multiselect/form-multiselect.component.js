var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop } from 'vue-property-decorator';
import FormInputBaseComponent from '../form-input-base.component.vue';
let FormMultiSelectComponent = class FormMultiSelectComponent extends FormInputBaseComponent {
    constructor() {
        super();
        this.open = false;
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
        return this.value.join(",");
    }
    check(item) {
        var current = Object.assign([], this.value);
        var index = current.indexOf(item);
        if (index > -1) {
            current.splice(index, 1);
        }
        else {
            current.push(item);
        }
        this.$emit("input", current);
    }
    isChecked(item) {
        return this.value.some(s => s === item);
    }
};
__decorate([
    Prop({ type: Array, required: true })
], FormMultiSelectComponent.prototype, "items", void 0);
FormMultiSelectComponent = __decorate([
    Component({
        components: {
            'form-input-base': FormInputBaseComponent
        }
    })
], FormMultiSelectComponent);
export default FormMultiSelectComponent;
//# sourceMappingURL=form-multiselect.component.js.map