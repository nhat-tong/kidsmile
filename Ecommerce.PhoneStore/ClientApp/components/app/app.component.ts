import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import AuthenticationComponent from './authentication/authentication.component.vue';
import NavigationComponent from './navigation/nav.component.vue';
import CartSummaryComponent from '../cart/cart-summary/cart-summary.component.vue';

@Component({
    components: {
        'auth-modal': AuthenticationComponent,
        'nav-item': NavigationComponent,
        'cart-summary': CartSummaryComponent
    }
})
export default class AppComponent extends Vue {
    currentYear: number;

    constructor() {
        super();
        this.currentYear = (new Date()).getFullYear();
    }

    get showAuthModal() {
        return this.$store.state.authModule.showAuthModal;
    }

    get isAdmin() {
        return this.$store.getters['authModule/isInRole']('Admin');
    }

    get isCustomer() {
        return (this.$store.getters['authModule/isInRole']('Customer') || !this.$store.getters['authModule/isAuthenticated']);
    }
}
