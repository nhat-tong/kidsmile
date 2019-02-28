<template>
    <b-container class="pt-4">
        <b-button variant="outline-secondary" @click.prevent="back">
            <i class="fas fa-arrow-left"></i>
            Back to results
        </b-button>
        <b-row class="pt-4">
            <b-col cols="5">
                <b-row>
                    <b-col class="mb-2" v-for="(image, index) in product.images" :key="index" :cols="index === 0 ? 12 : 4">
                        <img class="img-fluid"
                             :src="image"
                             :alt="product.name"
                             @click="openGallery(index)" />
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="7">
                <h2>{{ product.name }}</h2>

                <p class="mt-4 mb-4">
                    {{ product.shortDescription }}
                </p>

                <!--<h5>Features</h5>
                <ul>
                    <li v-for="feature in product.features" :key="feature">{{ feature }}</li>
                </ul>

                <h5>Variants</h5>
                <b-form-group label="Colour">
                    <b-form-select :options="colours" v-model="colour" />
                </b-form-group>

                <b-form-group label="Capacity">
                    <b-form-select :options="storages" v-model="capacity" />
                </b-form-group>

                <p class="mt-4 mb-4">
                    <b>Price:</b> {{ variant.price | currency }}
                </p>-->
                <h5>Size</h5>
                5-14y

                <p class="mt-4 mb-4">
                    <b>Price:</b> 170k
                </p>

                <b-button variant="primary" @click="addProductToCart">Add to cart</b-button>
            </b-col>
        </b-row>
        <b-row>
            <b-col cols="12">
                <h3 class="mt-4">Product details</h3>
                <p class="mt-4 mb-4">
                    {{ product.description }}
                </p>
            </b-col>
        </b-row>

        <transition name="fade" mode="out-in">
            <gallery v-if="open" :items="product.images" :idx="index" @close="open = false" />
        </transition>
    </b-container>
</template>

<script lang="ts" src="./product-detail.component.ts"></script>

<style lang="scss" scoped>
    img {
        cursor: pointer;
    }
</style>