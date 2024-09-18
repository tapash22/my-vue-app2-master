<script setup lang="ts">
import { ref, watch, computed } from "vue";
import { Search } from "../../views/HomeView.vue";

// Define the model with Search type
const search = defineModel<Search>();

const showDatePicker = ref(false);

const formattedDate = computed(() => {
    const options: Intl.DateTimeFormatOptions = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    };
    // Assuming search.value.date is a valid Date object
    return new Date(search!.date).toLocaleDateString('en-US', options);
});

watch(
    search,
    (newValue) => {
        if (newValue?.date) {
            showDatePicker.value = false;
        }
    },
    { deep: true }
);
</script>

<template>
    <v-sheet rounded="xl" elevation="6" color="white" class="d-flex justify-center w-100 h-100 pa-5">
        <v-row class="d-flex justify-space-between pa-5">
            <v-col cols="3" class="d-flex justify-center align-center px-2" style="align-self: center">
                <!-- Use the non-null assertion to tell TypeScript search is not undefined -->
              
            <v-text-field
            label="Prepend"
            prepend-icon="mdi-map-marker"
          ></v-text-field>
            </v-col>
            <v-col cols="3" class="px-2">
                <v-text-field label="To" v-model="search!.toLocation" variant="outlined"
                    placeholder="Enter your Destination" />
            </v-col>
            <v-col cols="6" style="position: relative; display: flex;" class="px-2 h-auto cursor-pointer">
                <v-text-field @click="showDatePicker = !showDatePicker" v-model="search!.date" variant="outlined"
                    label="Select Date" :value="formattedDate" readonly class="pa-0 ma-0">
                    <template #append-inner>
                        <div class="pa-0 ma-0 d-flex justify-space-between align-center">
                            <v-icon icon="mdi-calendar" color="primary"></v-icon>
                            <v-btn block variant="text" class="pa-0 ma-0" @click="searchDestination">
                                <template #prepend>
                                    <v-icon color="black" size="x-large" icon="mdi-magnify" />
                                </template>
                            </v-btn>
                        </div>
                    </template>
                </v-text-field>
                <v-date-picker
                    style="position: absolute; top: 70px; right: 0; z-index: 99; padding: 0 !important; margin: 0 !important;"
                    v-if="showDatePicker" v-model="search!.date"></v-date-picker>
            </v-col>
        </v-row>
    </v-sheet>
</template>
