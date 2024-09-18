<script setup lang="ts">
import image3 from '../../assets/fly.png'

defineProps<{fromDate:any}>()

</script>

<template>
    <v-card elevation="0" class="w-100 border border-sm border-secondary pa-2" rounded="0" variant="outlined">
        <v-card-title class="d-flex justify-center align-center w-100 h-auto">
            <div>
                <p class="text-subtitle-1 text-black font-weight-medium text-center ">
                    Flight Details
                </p>
                <v-chip class="ma-2" color="red-darken-1" label variant="flat" size="large">
                    <v-icon icon="mdi-label" start></v-icon>
                    DAC-XB
                </v-chip>
            </div>
        </v-card-title>
        <v-card-text class="pa-0">
            <v-row class="d-flex justify-center align-center pa-5">
                <v-col cols="8" class="d-flex justify-start align-center w-100 pa-2">
                    <v-img :src="image3" height="30" />
                    <p class=" w-75 text-wrap text-subtitle-1 font-weight-medium text-black">
                        this for using title for
                    </p>
                </v-col>
                <v-col cols="4" class="d-flex justify-center align-center">
                    <p class="text-subtitle-2 font-weight-medium text-gray-lighten-1">
                        (Economi class)
                    </p>
                </v-col>
            </v-row>
            <v-divider color="error" thickness="2" class="mx-5" />
            <v-row class="d-flex justify-center align-center border-bottom-4 pa-5">
                <v-col cols="3" class="d-flex justify-start align-center">
                    <p class="text-subtitle-2 font-weight-medium text-black">
                        {{ fromDate }}
                    </p>
                </v-col>
                <v-col cols="6" class="d-flex justify-center align-center pa-5">
                    <div class="w-100">
                        <v-divider color="error" class=" border-opacity-50" thickness="1" />
                        <p class="text-caption font-weight-medium text-black d-flex justify-center py-2  ">
                            1h 15min
                        </p>
                    </div>
                </v-col>
                <v-col cols="3" class="d-flex justify-end align-center">
                    <p class="text-subtitle-2 font-weight-medium text-black">
                        {{ fromDate }}
                    </p>
                </v-col>
            </v-row>

        </v-card-text>
    </v-card>
</template>