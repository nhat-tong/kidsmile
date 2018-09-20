<template>
    <form-input-base :label="label">
        <div class="multi-select">
            <input ref="input"
                   :value="text"
                   :name="name"
                   :class="classes"
                   @focus="focus"
                   @blur="blur"
                   @keydown.prevent="keydown" />

            <div v-if="error" class="invalid-feedback">
                {{ error }}
            </div>

            <b-list-group v-if="open">
                <b-list-group-item v-for="(item, index) in items"
                                   :key="index"
                                   @mousedown.prevent="check(item)">

                    <b-form-checkbox class="checkbox"
                                     :checked="isChecked(item)"
                                     disabled>

                        {{ item }}
                    </b-form-checkbox>
                </b-list-group-item>
            </b-list-group>
        </div>
    </form-input-base>
</template>

<script lang="ts" src="./form-multiselect.component.ts"></script>

<style lang="scss" scoped>
    .multi-select {
        position: relative;
        .list-group

    {
        position: absolute;
        top: 42px;
        right: 0;
        left: 0;
        z-index: 1;
        -webkit-box-shadow: 0px 2px 10px 0px rgba(204, 204, 204, 1);
        -moz-box-shadow: 0px 2px 10px 0px rgba(204, 204, 204, 1);
        box-shadow: 0px 2px 10px 0px rgba(204, 204, 204, 1);
        margin-bottom: 20px;
        .list-group-item

    {
        cursor: pointer;
        &:hover

    {
        background: darken(#fff, 5%);
    }

    .custom-control {
        cursor: pointer;
    }

    }
    }
    }
</style>