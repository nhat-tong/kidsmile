<template>
    <div>
        <b-form-input v-model="searchTerm"
                      type="text"
                      placeholder="Search..."
                      @keyup.enter.native="search">
        </b-form-input>
    </div>
</template>

<script lang="ts" src="./search-bar.component.ts"></script>