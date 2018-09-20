<template>
    <form-input-base :label="label">
        <div class="typeahead">
            <input ref="input"
                   :value="value"
                   :name="name"
                   :class="classes"
                   @blur="blur"
                   @focus="focus"
                   @keydown.enter.prevent="enter"
                   @keydown.down.prevent="down"
                   @keydown.up.prevent="up"
                   @input="input" />

            <div v-if="error" class="invalid-feedback">
                {{ error }}
            </div>

            <b-list-group v-if="open" class="suggestions">
                <b-list-group-item v-for="(suggestion, index) in matches"
                                   :key="index"
                                   :active="index === current"
                                   @mousedown.prevent="click(index)"
                                   button>
                    {{ suggestion }}
                </b-list-group-item>
            </b-list-group>
        </div>
    </form-input-base>
</template>

<script lang="ts" src="./form-typeahead.component.ts"></script>

<style lang="scss" scoped>
    .typeahead {
        position: relative;
        .suggestions

    {
        position: absolute;
        top: 42px;
        right: 0;
        left: 0;
        z-index: 1;
        -webkit-box-shadow: 0px 2px 10px 0px rgba(204, 204, 204, 1);
        -moz-box-shadow: 0px 2px 10px 0px rgba(204, 204, 204, 1);
        box-shadow: 0px 2px 10px 0px rgba(204, 204, 204, 1);
    }
    }
</style>