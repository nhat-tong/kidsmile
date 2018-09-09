var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import AuthenticationComponent from './authentication/authentication.component.vue';
let AppComponent = class AppComponent extends Vue {
    constructor() {
        super();
    }
    get showAuthModal() {
        return true;
    }
    get isAdmin() {
        return false;
    }
    get isCustomer() {
        return false;
    }
};
AppComponent = __decorate([
    Component({
        components: {
            'auth-modal': AuthenticationComponent
        }
    })
], AppComponent);
export default AppComponent;
//# sourceMappingURL=app.component.js.map