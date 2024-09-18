<template>
    <v-row class="my-5 d-flex  ">

        <v-col :cols="2" class="d-flex justify-center align-center mx-5 px-5" v-for="i in 10" :key="i">
            <div class="circle">
                <p class="text-white font-weight-bold text-h6 ">
                    0{{ i }}
                </p>
            </div>
         
        </v-col>
    </v-row>
</template>

<style scoped>
.circle {
    position: relative;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    background: red;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.4s all;
    cursor: pointer;
    box-shadow: 2px 3px 10px red;
}

</style>