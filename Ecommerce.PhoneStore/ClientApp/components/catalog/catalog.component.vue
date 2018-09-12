<template>
    <b-container fluid class="page">
        <b-row>
            <b-col cols="3">
                <product-filter :filters="filters"></product-filter>
            </b-col>
            <b-col cols="9">
                <div class="mt-4 flex">
                    <search-bar class="search" />
                    <product-sort class="ml-4" />
                </div>
                <product-list :products="sortedProducts" ></product-list>
            </b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts" src="./catalog.component.ts"></script>

<style lang="css" scoped>
    .flex {
        display: flex;
        flex-direction: row;
    }

    .search {
        flex: 1;
    }
</style>