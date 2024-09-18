<script setup lang="ts">
import { ref } from "vue"
import { useRoute } from 'vue-router';

const route = useRoute();

const drawer = ref(true)
const rail = ref(true)
const color = ref(false)


const isActive = (value: any) => {
  let value1 = value

  if(value1 === '/'){
    return route.path.includes('/')
  }
  color.value = true
  return route.path.includes(value1);
};

const items = ref([
  {
    title: 'Home',
    value: 'home',
    icon: 'mdi-home-city'
  },
  {
    title: 'About',
    value: 'about',
    icon: 'mdi-account'
  },
  {
    title: 'Contact',
    value: 'contact',
    icon: 'mdi-account-group-outline'
  },
],)
// searchbar
// const searchView = ref(false)
// const search = ref('')
// const searchList = ref([])
// const searchListView = ref(false)

// function searchBar() {
//     searchView.value = !searchView.value
// }
// function hideSearch() {
//     searchView.value = false
//     if (search) {
//         searchListView.value = true
//         return searchList
//     }
//     searchListView.value = false
// }
</script>

<template>
  <v-app-bar color="red-darken-1">
    <!-- <template v-slot:image>
            image="https://picsum.photos/1920/1080?random"
            <v-img gradient="to top right, rgba(19,84,122,.8), rgba(128,208,199,.8)"></v-img>
        </template> -->

    <template v-slot:prepend>
      <v-app-bar-nav-icon @click="rail = !rail"></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title>TakeOff</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-row class=" d-flex justify-center h-100">
      <v-col cols="12" class=" d-flex justify-end">
        <v-btn>
          <v-icon size="x-large">mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-navigation-drawer class="bg-white h-screen" v-model="drawer" :rail="rail" rail-width="60" permanent>
      <v-list density="compact" nav>
        <v-list-item v-for="i in items" :key="i.icon" :to="i.value === 'home' ? '/' : `/${i.value}`"
          :prepend-icon="i.icon" :active="isActive(i.value)" active-class="active-item">

          <template #prepend>
            <v-icon :icon="i.icon" size="large" color="red" />
          </template>
          <v-list-item-title v-text="i.value"
            class="text-subtitle font-weight-bold text-black  text-uppercase"></v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app-bar>
  <!-- <div v-if="search && searchView" class="bg-teal-darken-1"
        style="position: absolute; top: 50px;right:65px; box-shadow: 1px 2px 4px green; width: 370px;height: 300px;z-index: 99;">
        <div class="w-100 h-100 d-flex justify-center align-center ">
            <p class="d-flex justify-center align-center text-black font-weight-medium">
                {{ searchList.length ? searchList : "not found" }}
            </p>
        </div>
    </div> -->

</template>

<style scoped>
.active-item {
  background-color: #74dbeb;
  font-weight: bold;
}
</style>
