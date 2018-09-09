import Vue from 'vue';
import { Component } from 'vue-property-decorator';

import AuthenticationComponent from './authentication/authentication.component.vue';

@Component({
    components: {
        'auth-modal': AuthenticationComponent
    }
})
export default class AppComponent extends Vue {
    constructor() {
        super();
    }

    get showAuthModal() {
        return this.$store.state.auth.showAuthModal;
    }

    get isAdmin() {
        return this.$store.getters['auth/isInRole']('Admin');
    }

    get isCustomer() {
        return (this.$store.getters['auth/isInRole']('Customer') || !this.$store.getters['auth/isAuthenticated']);
    }
}
