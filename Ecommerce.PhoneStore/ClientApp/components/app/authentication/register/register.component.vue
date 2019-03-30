<template>
    <form @submit.prevent="submit" class="p-2">
        <b-alert variant="danger" :show="regErrors !== null" dismissible @dismissed="regErrors = null">
            <ul>
                <li v-for="(error, index) in regErrors" :key="index">{{ error.description }}</li>
            </ul>
        </b-alert>
        <b-form-group label="E-mail">
            <b-form-input type="text" name="email" placeholder="Enter your email" v-model.trim="email" v-validate="'required'"></b-form-input>
            <span v-show="errors.has('email')" class="text-danger">{{ errors.first('email') }}</span>
        </b-form-group>
        <b-form-group label="Password">
            <b-form-input ref="password" name="password" type="password" placeholder="Enter your password" v-model.trim="password" v-validate="'required|min:6|max:35'" />
            <span v-show="errors.has('password')" class="text-danger">{{ errors.first('password') }}</span>
        </b-form-group>
        <b-form-group label="Confirm Password">
            <b-form-input name="confirmPassword" type="password" placeholder="Confirm your password" v-model.trim="confirmPassword" v-validate="'required|confirmed:password'" />
            <span v-show="errors.has('confirmPassword')" class="text-danger">{{ errors.first('confirmPassword') }}</span>
        </b-form-group>
        <b-form-group>
            <b-button variant="primary" type="submit" :disabled="disableForm">Register</b-button>
            <b-button variant="default" @click="close">Cancel</b-button>
        </b-form-group>
    </form>
</template>

<script lang="ts" src="./register.component.ts"></script>