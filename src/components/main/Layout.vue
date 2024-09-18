<script setup lang="ts">
import FooterView from "./FooterView.vue"
import HeaderView from "./HeaderView.vue"

</script>

<template>
    <v-main>
        <v-row>
            <header-view />
        </v-row>
        <v-row class="w-full h-full">
            <router-view />
        </v-row>
        <v-row >
            <footer-view />
        </v-row>
    </v-main>
</template>

