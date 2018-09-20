<template>
    <div class="form-group">
        <label v-if="label">{{ label }}</label>
        <slot><!--input will eventually go here --></slot>
    </div>
</template>

<script lang="ts" src="./form-input-base.component.ts"></script>