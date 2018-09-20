<template>
    <b-modal ref="modal" id="variantModal" title="Add a new variant" ok-title="Add" @ok="submit">
        <form @submit.prevent="submit">
            <form-typeahead label="Colour"
                       name="colour"
                       :items="colours"
                       v-validate="'required|min:3'"
                       :error="errors.first('colour')"
                       v-model="colour" />

            <form-typeahead label="Capacity"
                       name="capacity"
                       :items="storage"
                       v-validate="'required|min:3'"
                       :error="errors.first('capacity')"
                       v-model="capacity" />

            <form-input type="number"
                        label="Price"
                        name="price"
                        :error="errors.first('price')"
                        prepend="€"
                        v-model="price"
                        v-validate="'required|decimal'" />
        </form>
    </b-modal>
</template>

<script lang="ts" src="./variant-modal.component.ts"></script>