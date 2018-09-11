import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import AuthenticationComponent from './authentication/authentication.component.vue';
import NavigationComponent from './navigation/nav.component.vue';

@Component({
    components: {
        'auth-modal': AuthenticationComponent,
        'nav-item': NavigationComponent
    }
})
export default class AppComponent extends Vue {
    constructor() {
        super();
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
