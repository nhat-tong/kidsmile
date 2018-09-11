import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class NavigationComponent extends Vue {
    constructor() {
        super();
    }

    get isAuthenticated() {
        return this.$store.getters['authModule/isAuthenticated'];
    }

    get isCustomer() {
        return this.$store.getters['authModule/isInRole']('Customer');
    }

    login() {
        this.$store.commit('authModule/showAuthModal');
    }

    logout() {
        this.$store.dispatch('authModule/logout').then(() => {

        });
    }
}