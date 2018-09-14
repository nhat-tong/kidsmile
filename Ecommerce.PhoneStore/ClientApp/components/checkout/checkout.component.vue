<template>
    <b-container class="page pt-4">
        <h1>Checkout</h1>
        <checkout-success v-if="success" :order="order" />
        <b-row v-else>
            <b-col cols="4" order="2">
                <checkout-summary />
            </b-col>
            <b-col cols="8">
                <checkout-form @success="onSuccess" />
            </b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts" src="./checkout.component.ts"></script>