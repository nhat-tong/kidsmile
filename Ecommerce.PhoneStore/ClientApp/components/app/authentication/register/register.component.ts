import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class RegisterComponent extends Vue {
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    regErrors: any = null;

    constructor() {
        super();
    }

    get loading() {
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
}