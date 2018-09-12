<template>
    <div class="slider">
        <vue-slider :value="value"
                    :formatter="formatter"
                    :min="min"
                    :max="max"
                    :interval="interval || 1"
                    :lazy=true
                    width="90%"
                    @callback="filter">
        </vue-slider>
    </div>
</template>

<script lang="ts" src="./range-filter.component.ts"></script>

<style lang="scss" scoped>
    .slider {
        padding: 35px 0 10px 10px;
    }
</style>