<template>
    <div class="products">
        <b-row class="mt-4">
            <b-col class="mb-4" sm="6" v-for="product in products" :key="product.id">
                <b-media class="product">
                    <img slot="aside" :src="product.thumbnail" :alt="product.name" @click="view(product)" />

                    <h2 class="mt-2" @click="view(product)">{{ product.name }}</h2>

                    <p class="mt-4 mb-4">
                        {{ product.shortDescription }}
                    </p>

                    <p class="mt-4 mb-4">Prices from {{ product.price | currency }}</p>
                </b-media>
            </b-col>
        </b-row>
    </div>
</template>

<script lang="ts" src="./product-list.component.ts"></script>

<style lang="css" scoped>
    .product {
        border: 3px solid #eee;
    }
    img, h2 {
        cursor: pointer;
    }
</style>