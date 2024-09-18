<script setup lang="ts">
import { ref } from 'vue'
import footer from '../../assets/footer.svg'
import type { FooterLists } from '@/types/footer-type'

const date = new Date().getUTCFullYear()
const footerIcon = ref([
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
]);
const footerList = ref<FooterLists>([
    {
        id: 1,
        logo: footer,
    },
    {
        id: 2,
        name: "Info",
        detailList: [
            {
                id: 1,
                name: 'Home',
                path: '/'
            },
            {
                id: 2,
                name: 'About',
                path: '/about'
            },
            {
                id: 3,
                name: 'Contactus',
                path: '/contact-us'
            },

        ]
    },
    {
        id: 3,
        name: "",
        info: [
            {
                id: 1,
                title: 'Need Help?',
                details: "We're here for you 24/7 | Reach out to us through Messenger or call anytime,day or night for the support you need."
            },
            {
                id: 2,
                title: "Experlence Center",
                details: "House:40, Road:01, Block:E, Bonosree,Rumpura,Dhaka"
            }
        ]
    },
])
</script>

<template>
    <v-sheet class="w-100 h-auto " elevation="4">
        <v-row class="w-100 h-auto pa-0 h-auto d-flex justify-start py-1 bg-red-darken-1 ">
            <v-col cols="3" v-for="footer in footerList" :key="footer.id ?? ''" class="pa-0 h-full">
                <v-card v-if="footer.logo" variant="text" 
                    class="d-flex justify-center align-center w-100 h-100 ">
                    <v-img :src="footer.logo" height="80" />
                </v-card>
                <v-card v-else class="pa-0 ma-0 d-block w-100 h-100 bg-red" variant="text" color="red"
                    style="box-shadow: 0px 2px 2px red;">
                    <v-card-title v-if="footer.name" class="text-h6 font-weight-bold text-black">
                        {{ footer.name }}
                    </v-card-title>
                    <v-divider :thickness="2" class="border-opacity-100 my-2" color="warning" v-if="footer.name"></v-divider>
                    <v-card-text class="py-0 px-2 d-flex  align-center">
                        <v-list density="compact" class="rounded-lg px-2 py-0 ma-0 bg-transparent"
                            v-if="footer.detailList">
                            <v-list-item slim v-for="item in footer.detailList" :key="item.id ?? ''" class="pa-0 ma-0">
                                <router-link :to="item.path ?? ''"
                                    class="text-subtitle-2 font-weight-medium text-white">
                                    {{ item.name }}
                                </router-link>
                            </v-list-item>
                        </v-list>
                        <v-sheet v-else elevation="0" class="w-full h-full pa-2 ma-0 d-block bg-red">
                            <div class="w-full h-full pa-4 ma-0 d-block" v-for="info in footer.info"
                                :key="info.id ?? ''">
                                <p class="text-subtitle-2 font-weight-medium text-black">
                                    {{ info.title }}
                                </p>
                                <v-divider :thickness="2" class="border-opacity-100 my-2" color="warning" v-if="info.title"></v-divider>
                                <p class="text-caption font-weight-medium text-white underline text-wrap">
                                    {{ info.details }}
                                </p>
                            </div>
                        </v-sheet>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="3" class="bg-red-darken-1">
                <v-sheet elevation="0" class="w-100 h-auto px-4 py-4 rounded-lg bg-transparent ">
                    <v-form class="">
                        <h6 class="d-flex w-100 justify-center py-2 text-h6 font-weight-bold ">
                            Contact Form
                        </h6>
                        <v-text-field label="Name" variant="outlined" density="compact" />
                        <v-text-field label="Email" variant="outlined" density="compact" />
                        <div class="w-100">
                            <v-btn class="text-h6 font-weight-medium" color="red" size="large" block>
                                Send
                            </v-btn>
                        </div>
                    </v-form>
                </v-sheet>
            </v-col>
        </v-row>
        <v-row class="pa-0">
            <v-col class=" d-flex justify-center w-100 align-center bg-red py-0">
                <v-btn v-for="icon in footerIcon" :key="icon" :icon="icon" class="mx-2" color="white" size="x-large"
                    variant="plain">
                </v-btn>
            </v-col>
        </v-row>
        <v-row class="d-flex justify-center align-center bg-red-darken-1 pa-0">
            <v-col class="w-100 d-flex justify-center py-2">
                All rights reserved &copy; {{ date }}
            </v-col>
        </v-row>
    </v-sheet>
</template>