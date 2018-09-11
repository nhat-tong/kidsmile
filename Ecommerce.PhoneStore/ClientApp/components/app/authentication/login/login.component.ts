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

    get loading() {
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