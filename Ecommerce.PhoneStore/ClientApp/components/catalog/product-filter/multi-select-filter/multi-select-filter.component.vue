<template>
    <b-row>
        <b-col cols="6">
            <div :class="{ 'filter-item': true,  'active': selected.length === 0 }" @click="clear">All</div>
        </b-col>
        <b-col cols="6" v-for="item in items" :key="item">
            <div :class="{ 'filter-item': true, 'active': selected.indexOf(item) > -1 }" @click="filter(item)">{{ item }}</div>
        </b-col>
    </b-row>
</template>

<script lang="ts" src="./multi-select-filter.component.ts"></script>

<style lang="scss" scoped>
    .filter-item {
        margin: 10px 0;
        border: 1px solid #ccc;
        border-radius: 5px;
        padding: 10px;
        text-align: center;
        cursor: pointer;
        &.active

    {
        font-weight: bold;
        color: #17a2b8;
        border-color: #17a2b8;
    }
    }
</style>