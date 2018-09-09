<template>
    <form @submit.prevent="submit" class="p-2">
        <b-alert variant="danger" :show="regErrors !== null" dismissible @dismissed="regErrors = null">
            <div v-for="(error, index) in regErrors" :key="index">{{ error[0] }}</div>
        </b-alert>
        <b-form-group label="E-mail">
            <b-form-input v-model.trim="email" />
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input v-model.trim="password" type="password" />
        </b-form-group>
        <b-form-group label="Confirm Password">
            <b-form-input v-model.trim="confirmPassword" type="password" />
        </b-form-group>
        <b-form-group>
            <b-button variant="primary" type="submit" :disabled="loading">Register</b-button>
            <b-button variant="default" @click="close" :disabled="loading">Cancel</b-button>
        </b-form-group>
    </form>
</template>

<script lang="ts" src="./register.component.ts"></script>