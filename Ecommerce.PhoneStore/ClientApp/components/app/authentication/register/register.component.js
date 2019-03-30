var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
let RegisterComponent = class RegisterComponent extends Vue {
    constructor() {
        super();
        this.email = '';
        this.password = '';
        this.confirmPassword = '';
        this.regErrors = null;
    }
    get disableForm() {
        if (this.fields['email']) {
            if (!this.fields['email'].dirty || !this.fields['email'].validated)
                return true;
        }
        if (this.fields['password']) {
            if (!this.fields['password'].dirty || !this.fields['password'].validated)
                return true;
        }
        if (this.fields['confirmPassword']) {
            if (!this.fields['confirmPassword'].dirty || !this.fields['confirmPassword'].validated)
                return true;
        }
        if (this.errors.count() > 0)
            return true;
        return false;
    }
    submit() {
        const payload = {
            email: this.email,
            password: this.password,
            confirmPassword: this.confirmPassword
        };
        this.$store.dispatch('authModule/register', payload).then(response => {
            this.regErrors = null;
            this.email = '';
            this.password = '';
            this.confirmPassword = '';
            this.$emit('success');
        }).catch(error => {
            this.regErrors = error.data;
        });
    }
    close() {
        this.regErrors = null;
        this.$emit('close');
    }
};
RegisterComponent = __decorate([
    Component
], RegisterComponent);
export default RegisterComponent;
//# sourceMappingURL=register.component.js.map