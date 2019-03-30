import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class LoginComponent extends Vue {
    @Prop({ required: false })
    registered: boolean;

    email: string = '';
    password: string = '';
    error: string = null;

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

        if (this.errors.count() > 0) return true;

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
}