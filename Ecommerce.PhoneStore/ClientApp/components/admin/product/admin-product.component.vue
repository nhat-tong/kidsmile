<template>
    <div>
        <h3 class="float-left">Products</h3>
        <b-button variant="primary" to="/admin/product/create" class="float-right mb-4">
            <i class="fas fa-plus"></i>
            Add new product
        </b-button>
        <table class="table table-striped table-hover">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Short description</th>
                    <th>Price</th>
                </tr>
            </thead>
            <tbody>
                <template v-if="products && products.length > 0">
                    <tr v-for="product in products" :key="product.id">
                        <td>{{ product.id }}</td>
                        <td>{{ product.name }}</td>
                        <td>{{ product.shortDescription }}</td>
                        <td>{{ product.price | currency }}</td>
                    </tr>
                </template>
                <tr v-else>
                    <td colspan="3">There are no products to display.</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts" src="./admin-product.component.ts"></script>