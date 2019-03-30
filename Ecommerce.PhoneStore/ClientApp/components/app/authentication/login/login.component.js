var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
let LoginComponent = class LoginComponent extends Vue {
    constructor() {
        super();
        this.email = '';
        this.password = '';
        this.error = null;
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
        if (this.errors.count() > 0)
            return true;
        return false;
    }
    login() {
        const payload = {
            email: this.email,
            password: this.password
        };
        this.$store.dispatch('authModule/login', payload)
            .then(response => {
            this.error = null;
            this.email = '';
            this.password = '';
            if (this.$route.query.redirect) {
                this.$router.push(this.$route.query.redirect);
            }
        })
            .catch(error => {
            this.error = error.data;
        });
    }
    close() {
        this.$emit('close');
    }
};
__decorate([
    Prop({ required: false })
], LoginComponent.prototype, "registered", void 0);
LoginComponent = __decorate([
    Component
], LoginComponent);
export default LoginComponent;
//# sourceMappingURL=login.component.js.map