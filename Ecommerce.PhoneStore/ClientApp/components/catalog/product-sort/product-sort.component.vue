<template>
    <div>
        <span class="label mr-2">Sort by</span>
        <b-dropdown class="dropdown" right :text="items[selected]">
            <b-dropdown-item v-for="(item, index) in items" :key="index" @click="select(index)">{{ item }}</b-dropdown-item>
        </b-dropdown>
    </div>
</template>

<script lang="ts" src="./product-sort.component.ts"></script>

<style lang="css" scoped>
    .label,
    .dropdown {
        vertical-align: middle;
    }
</style>