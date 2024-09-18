<script setup lang="ts">
import { computed, ref } from 'vue'
import image2 from '../../assets/images.png'
import ProductDialog from '../dialog/ProductDialog.vue'

const prePrice = ref(5000)
const nowPrice = ref(3500)
const showParent = ref(false)
const formatPrice = (price:any) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
const formattedPrice1 = computed(() => formatPrice(prePrice.value));
const formattedPrice2 = computed(() => formatPrice(nowPrice.value));

</script>

<template>
    <v-row class=" w-full h-full bg-grey-lighten-3 d-flex justify-space-between border">
        <v-col class="d-flex justify-start align-center pa-0 w-full h-full" :cols="8">
            <v-row class="pa-0 d-flex justify-center align-center">
                <v-col :cols="7" class="d-flex justify-start align-center ">
                    <v-img :src="image2" height="50" />
                    <p class="text-subtitle-1 font-weight-medium text-black w-75">
                        this for using title for
                    </p>
                </v-col>
                <v-col :cols="5" class="d-flex justify-center align-center pa-0">
                    <v-row class="d-flex justify-space-between w-full h-100 ">
                        <v-col :cols="5" class="d-flex justify-space-between align-center pa-2">
                            <p class="text-subtitle-1 font-weight-medium text-black">Dhaka</p>
                        </v-col>
                        <v-col :cols="2" class="d-flex justify-start align-center pa-2">
                            <v-divider class="mx-2 border-opacity-50" vertical color="red" thickness="2"></v-divider>
                        </v-col>
                        <v-col :cols="5" class="d-flex justify-start align-center pa-2 ">
                            <p class="text-subtitle-1 font-weight-medium text-black">
                                Destination
                            </p>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-col :cols="4" class="pa-5">
            <v-card elevation="0" rounded="0" class="w-100 h-100 bg-transparent pa-2">
                <v-card-title class="d-flex justify-end align-center text-subtitle-2 font-weight-bold text-black my-2">
                    Set number
                </v-card-title>
                <v-card-text class="d-flex justify-space-around align-center">
                    <v-chip class="text-decoration-line-through text-red">{{ formattedPrice1 }}</v-chip>
                    <v-chip size="x-large">
                        {{ formattedPrice2 }}
                    </v-chip>
                </v-card-text>
                <v-card-actions class="bg-white">
                    <product-dialog />
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>