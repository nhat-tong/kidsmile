<template>
    <b-container fluid class="page">
        <b-row>
            <b-col cols="3">
                <!--<filters v-if="filters.brands.length" :filters="filters" />-->
            </b-col>
            <b-col cols="9">
                <div class="mt-4 flex">
                    <search-bar class="search" />
                    <!--<product-sort class="ml-4" />-->
                </div>
                <product-list :products="sortedProducts" ></product-list>
            </b-col>
        </b-row>
    </b-container>
</template>

<script lang="ts" src="./catalog.component.ts"></script>