var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Component, Prop } from 'vue-property-decorator';
import FormInputBaseComponent from '../form-input-base.component.vue';
let FormInputComponent = class FormInputComponent extends FormInputBaseComponent {
    constructor() {
        super();
    }
};
__decorate([
    Prop({ type: String, default: 'text' })
], FormInputComponent.prototype, "type", void 0);
__decorate([
    Prop({ type: String })
], FormInputComponent.prototype, "prepend", void 0);
__decorate([
    Prop({ type: String })
], FormInputComponent.prototype, "append", void 0);
FormInputComponent = __decorate([
    Component({
        components: {
            'form-input-base': FormInputBaseComponent
        }
    })
], FormInputComponent);
export default FormInputComponent;
//# sourceMappingURL=form-input.component.js.map