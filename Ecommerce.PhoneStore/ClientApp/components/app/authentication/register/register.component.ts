import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class RegisterComponent extends Vue {
    email: string = '';
    password: string = '';
    confirmPassword: string = '';
    regErrors: any = [];

    constructor() {
        super();
    }

    get loading() {
        return false;
    }

    submit() { }

    close() { }
}