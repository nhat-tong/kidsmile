<template>
    <b-nav-item id="Cart" to="/cart">
        <i class="fas fa-shopping-cart"></i>
        Cart ({{ count }})

        <b-popover target="Cart" triggers="hover">
            <div>
                Items: {{ count }}
            </div>
            <div>
                Total: {{ total | currency }}
            </div>
        </b-popover>
    </b-nav-item>
</template>

<script lang="ts" src="./cart-summary.component.ts"></script>