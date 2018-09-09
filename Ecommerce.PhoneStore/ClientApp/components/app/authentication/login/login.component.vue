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
            <b-form-input v-model.trim="email" />
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input v-model.trim="password" type="password" />
        </b-form-group>
        <b-form-group>
            <b-button variant="primary" type="submit" :disabled="loading">Login</b-button>
            <b-button variant="default" @click="close" :disabled="loading">Cancel</b-button>
        </b-form-group>
    </form>
</template>

<script lang="ts" src="./login.component.ts"></script>