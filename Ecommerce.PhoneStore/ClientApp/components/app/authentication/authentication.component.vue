<template>
    <b-modal v-model="show" hide-header hide-footer no-close-on-backdrop no-close-on-esc>
        <b-tabs v-model="index">
            <b-tab title="Login" active>
                <login-form :registered="registered" @close="close" />
            </b-tab>
            <b-tab title="Register">
                <register-form @success="success" @close="close" />
            </b-tab>
        </b-tabs>
    </b-modal>
</template>

<script lang="ts" src="./authentication.component.ts"></script>