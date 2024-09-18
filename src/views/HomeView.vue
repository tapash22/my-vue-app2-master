<script setup lang="ts">
import { ref, computed, watch } from "vue";
import image from '../assets/2.jpg'
import ProductCard from "../components/card/ProductCard.vue";

const showDatePicker = ref(false)
const search = ref({
    fromLocation: null,
    toLocation: null,
    date: new Date()
})

// interface FormatDate {
//     weekday: string | null
//     year: string | null
//     month: string | null
//     day: string | null
// }

const formattedDate = computed(() => {
    const options = {
        // weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    };
    return search.value.date.toLocaleDateString('en-US', options);
});


watch(search, (newValue) => {
    if (newValue.date) {
        showDatePicker.value = false
    }
}, { deep: true })

async function searchDestination() {
    console.log(search.value.date)
}


</script>

<template>
    <v-row>
        <v-col cols="d-block">
            <v-row class="d-flex justify-center align-center my-5">
                <v-col cols="8" class=" pa-2 d-flex justify-center w-100 my-2">
                    <v-sheet rounded="xl" elevation="6" color="white" class="d-flex justify-center align-center w-100 h-full  pa-5">
                        <v-row class="d-flex justify-space-between pa-5  ">
                            <v-col cols="4" class=" d-flex justify-center align-center px-2" style="align-self: center">
                                <!-- <v-text-field label="From" v-model="search.fromLocation" variant="outlined"
                                    placeholder="Enter your location" class="pa-0 ma-0" /> -->
                                <v-text-field label="From" v-model="search.fromLocation" variant="outlined"
                                    placeholder="Enter your location" class="pa-0 ma-0">
                                    <template #prepend-inner>
                                        <v-icon color="blue" size="large" icon="mdi-map-marker"></v-icon>
                                    </template>
                                </v-text-field>
                            </v-col>
                            <v-col cols="4" class="px-2">
                                <v-text-field label="To" v-model="search.toLocation" variant="outlined"
                                    placeholder="Enter your Destination">
                                    <template #prepend-inner>
                                        <v-icon color="blue" size="large" icon="mdi-map-marker"></v-icon>
                                    </template>
                                </v-text-field>
                            </v-col>
                            <v-col cols="4" style="position: relative; display: flex;"
                                class="px-2 h-auto  cursor-pointer">
                                <v-text-field @click="showDatePicker = !showDatePicker" v-model="search.date"
                                    variant="outlined" label="Select Date" :value="formattedDate" readonly
                                    class="pa-0 ma-0">
                                    <template #append-inner>
                                        <div class="pa-0 ma-0 d-flex justify-space-between align-center ">
                                            <v-icon icon="mdi-calendar" color="blue"></v-icon>
                                            <v-btn block variant="plain" class=" pa-0 ma-0" @click="searchDestination">
                                                <template #prepend>
                                                    <v-icon color="blue" size="x-large" icon="mdi-magnify" />
                                                </template>
                                            </v-btn>
                                        </div>
                                    </template>
                                </v-text-field>
                                <v-date-picker
                                    style="position: absolute; top: 70px; right: 0; z-index: 99; padding: 0 !important; margin: 0 !important;"
                                    v-if="showDatePicker" v-model="search.date"></v-date-picker>
                            </v-col>
                        </v-row>

                    </v-sheet>
                </v-col>
            </v-row>

            <v-row class="d-flex justify-center align-center px-3 py-5 mx-4 my-5">
                <v-col cols="10" class="pa-3 py-0 my-2 h-full d-block">
                    <product-card v-for="i in 4"  :key="i"  />
                </v-col>
            </v-row>
        </v-col>
    </v-row>
</template>