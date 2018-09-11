var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';
import LoginComponent from './login/login.component.vue';
import RegisterComponent from './register/register.component.vue';
let AuthenticationComponent = class AuthenticationComponent extends Vue {
    constructor() {
        super();
        this.index = 0;
        this.registered = false;
    }
    success() {
        this.registered = true;
        this.index = 0;
    }
    close() {
        this.$store.commit('authModule/hideAuthModal');
        let query = Object.assign({}, this.$route.query);
        delete query.redirect;
        this.$router.push({ query: query });
    }
};
__decorate([
    Prop()
], AuthenticationComponent.prototype, "show", void 0);
AuthenticationComponent = __decorate([
    Component({
        components: {
            'LoginForm': LoginComponent,
            'RegisterForm': RegisterComponent
        }
    })
], AuthenticationComponent);
export default AuthenticationComponent;
//# sourceMappingURL=authentication.component.js.map