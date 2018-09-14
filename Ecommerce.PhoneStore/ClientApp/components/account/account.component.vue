<template>
    <b-container class="page pt-4">
        <h1>My Account</h1>
        <order-list :orders="orders" />
    </b-container>
</template>

<script lang="ts" src="./account.component.ts"></script>