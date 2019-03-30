<template>
    <form @submit.prevent="login" class="p-2">
        <b-alert variant="danger" :show="error !== null" dismissible @dismissed="error = null">
            {{ error }}
        </b-alert>
        <b-alert variant="success" :show="registered && error === null">
            Registration successful. Please login to continue.
        </b-alert>
        <p>Login with your e-mail address and password.</p>
        <b-form-group label="E-mail">
            <b-form-input name="email" placeholder="Enter your email" v-model.trim="email" v-validate="'required'" />
            <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input name="password" type="password" placeholder="Enter your password" v-model.trim="password" v-validate="'required|min:6|max:35'" />
            <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
        </b-form-group>
        <b-form-group>
            <b-button variant="primary" type="submit" :disabled="disableForm">Login</b-button>
            <b-button variant="default" @click="close">Cancel</b-button>
        </b-form-group>
    </form>
</template>

<script lang="ts" src="./login.component.ts"></script>