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

    get disableForm() {
        if (this.fields['email']) {
            if (!this.fields['email'].dirty || !this.fields['email'].validated) return true;
        }

        if (this.fields['password']) {
            if (!this.fields['password'].dirty || !this.fields['password'].validated) return true;
        }

        if (this.fields['confirmPassword']) {
            if (!this.fields['confirmPassword'].dirty || !this.fields['confirmPassword'].validated) return true;
        }

        if (this.errors.count() > 0) return true;

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