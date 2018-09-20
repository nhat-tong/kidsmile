var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
let FormInputBaseComponent = class FormInputBaseComponent extends Vue {
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
};
__decorate([
    Prop()
], FormInputBaseComponent.prototype, "label", void 0);
__decorate([
    Prop()
], FormInputBaseComponent.prototype, "name", void 0);
__decorate([
    Prop()
], FormInputBaseComponent.prototype, "value", void 0);
__decorate([
    Prop()
], FormInputBaseComponent.prototype, "error", void 0);
FormInputBaseComponent = __decorate([
    Component
], FormInputBaseComponent);
export default FormInputBaseComponent;
//# sourceMappingURL=form-input-base.component.js.map