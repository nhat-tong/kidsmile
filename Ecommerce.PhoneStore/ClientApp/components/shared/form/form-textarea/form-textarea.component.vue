<template>
    <form-input-base :label="label">
        <textarea :class="classes"
                  :name="name"
                  :value="value"
                  :rows="rows"
                  @focus="$emit('focus')"
                  @blur="$emit('blur')"
                  @input="$emit('input', $event.target.value)"
                  @change="$emit('change', $event.target.value)">
        </textarea>

        <div v-if="error" class="invalid-feedback">
            {{ error }}
        </div>
    </form-input-base>
</template>

<script lang="ts" src="./form-textarea.component.ts"></script>