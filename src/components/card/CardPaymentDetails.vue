<script setup lang="ts">
import { ref } from "vue";
import type { Fdetails } from "./ProductCard.vue";

defineProps<{ flightDetails: Fdetails[] }>()
const activeTab = ref('baggage')
const detailTabs = ref([
    {
        id: 1,
        title: 'Baggage',
        value: 'baggage'
    },
    {
        id: 2,
        title: 'Fare',
        value: 'fare'
    },
    {
        id: 3,
        title: 'Policy',
        value: 'policy'
    },
])
</script>

<template>
    <v-card elevation="0" class="w-100 h-full border border-sm border-secondary " rounded="0" variant="outlined">
        <v-card-text class="w-100 h-full pa-0 mb-10">
            <v-tabs v-model="activeTab" color="red-accent-4">
                <v-tab v-for="detail in detailTabs" :key="detail.id" :value="detail.value">{{
                    detail.title
                }}</v-tab>
            </v-tabs>
            <v-divider color="error" thickness="2" />
            <v-tabs-window v-model="activeTab">
                <v-tabs-window-item v-for="n in detailTabs" :key="n.id" :value="n.value">
                    <v-row class="w-100 h-100 pa-2 d-flex justify-space-between align-center">
                        <v-col v-for="i in flightDetails" :key="i.id || ''" cols="4"
                            class="d-flex justify-center align-center w-full h-full mb-15">
                            <div class="d-block pa-0">
                                <p
                                    class="w-full d-flex justify-center align-certer text-subtitle-2 font-weight-medium text-black ">
                                    {{ i.title }}
                                </p>
                                <p
                                    class="w-full d-flex justify-center align-certer text-subtitle-2 font-weight-medium text-black ">
                                    {{ i.value }}
                                </p>
                            </div>
                        </v-col>
                    </v-row>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-card-text>
        <v-divider color="error" thickness="3" />
        <v-card-text class="pa-0 w-100  d-flex justify-center py-2 bg-grey-lighten-2">
            <v-row class="w-100 h-auto pa-2">
                <v-col cols="6" class="d-flex justify-start align-center">
                    <p class="text-subtitle-1 font-weight-bold text-black">
                        Total (1Traveler)
                    </p>
                </v-col>
                <v-col cols="6" class="d-flex justify-end align-center">
                    <p class="text-h6 font-weight-medium text-black">
                        BDT 5,999
                    </p>
                </v-col>
            </v-row>
        </v-card-text>
    </v-card>
</template>