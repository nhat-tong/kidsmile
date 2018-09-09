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

    }

    close() {

    }
}