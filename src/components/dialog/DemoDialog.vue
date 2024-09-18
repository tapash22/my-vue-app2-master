<script setup lang="ts">

const emit = defineEmits(['close'])
const detailsView = defineModel({ required: true, default: false })
const props = defineProps<{title:string, details: Object}>()

function close() {
    emit('close')
}
</script>

<template>
    <div v-if="detailsView"
        style="position: absolute; top:0; left: 0; width: 100vw; height: 100vh; display: flex; justify-content: center; align-items: center;">
        <v-card rounded="lg" elevation="7" class="w-50 h-full">
            <v-card-title class="w-screen h-auto py-2 px-5 d-flex justify-space-between align-center">
                <p>
                    {{title}}
                </p>
                <v-btn icon variant="text" @click="close" rounded="sm">
                    <v-icon color="grey">mdi-close</v-icon>
                </v-btn>
            </v-card-title>
            <v-card-text class="w-full h-full pa-4 border  ">
                <p class="text-justify font-weight-medium text-subtitle-1 text-black">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat cupiditate ut expedita hic
                    voluptatem
                    iste quisquam, deleniti odit illum numquam nihil, alias repudiandae distinctio corrupti eius debitis
                    corporis nisi molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas illo, et,
                    tempora saepe distinctio expedita minima libero molestias quasi debitis iure cum doloribus, rem
                    provident eligendi. Perspiciatis cupiditate reiciendis nemo!
                </p>
            </v-card-text>
            <v-card-actions class="w-full h-auto d-flex justify-end align-center py-4 px-5">
                <v-btn class="bg-red text-white font-weight-medium text-subtitle-2 mx-1" rounded="sm" @click="close">
                    close
                </v-btn>
                <v-btn class="bg-red text-white font-weight-medium text-subtitle-2 mx-1" rounded="sm" @click="close">
                    save
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>