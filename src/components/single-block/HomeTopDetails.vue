<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function goDetails(){
    router.push('/details')
}

</script>

<template>
    <v-row class="d-flex justify-center align-center pa-5 ma-0">
        <v-col :cols="8" class="w-full h-full pa-0 my-5">
            <v-card elevation="" rounded="none"  >
                <v-card-title
                    class="w-full h-auto pa-2 ma-0 d-flex justify-center align-center text-bold font-weight-bold text-h3">
                    WE BELEVE IN CHANGE
                </v-card-title>
                <v-card-text class="pa-3 ma-0 d-flex justify-center align-center">
                    <p class="text-center text-subtitle-1 font-weight-medium text-black px-5">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum quos itaque eaque, aut
                        necessitatibus dolorem officiis corrupti numquam perspiciatis ab, unde maiores enim distinctio
                        officia magnam quaerat velit repellendus doloribus.
                    </p>
                </v-card-text>
                <v-card-actions class="d-flex justify-center align-center w-full h-auto py-5">
                    <v-btn  rounded="sm" size="large" variant="tonal" class="text-black text-bold font-weight-bold px-5 bg-red" color="black" style="box-shadow: 2px 4px 6px red;" @click="goDetails">Continue Reading ..</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>