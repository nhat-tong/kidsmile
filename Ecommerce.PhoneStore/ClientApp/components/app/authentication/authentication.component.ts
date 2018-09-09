import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

import LoginComponent from './login/login.component.vue';
import RegisterComponent from './register/register.component.vue';

@Component({
    components: {
        'LoginForm': LoginComponent,
        'RegisterForm': RegisterComponent
    }
})
export default class AuthenticationComponent extends Vue {
    @Prop()
    show: boolean;

    index: number = 0;
    registered: boolean = false;

    constructor() {
        super();
    }

    success() { }

    close() { }
}
