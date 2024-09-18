<script setup lang="ts">
import { computed, ref, watch } from "vue";
import SubDialog from './SubDialog.vue'

const introTitle = ref(['MR', 'MS', 'MRS']);
const selectedIntro = ref('');
const country = ref(null);
const countryList = ref([
  { title: 'Bangladesh', value: 'bangladesh' },
  { title: 'India', value: 'india' },
  { title: 'Pakistan', value: 'pakistan' },
  { title: 'Sri Lanka', value: 'srilanka' },
  { title: 'USA', value: 'usa' }
]);

const countryList1 = ref([
  { title: '+1', value: '+1' },
  { title: '+1', value: '+1' },
  { title: '+44', value: '+44' },
  { title: '+61', value: '+61' },
  { title: '+49', value: '+49' }
]);
// const show = defineModel<boolean>({required:true})

const selectedCountryCode = ref('');
const phoneNumber = ref('');
const show = ref(false);

function goNext(isActive: { value: boolean }) {
  // Process form values here if needed
  console.log("Selected Title:", selectedIntro.value);
  console.log("Selected Country:", country.value);
  console.log("Selected Country Code:", selectedCountryCode.value);
  console.log("Phone Number:", phoneNumber.value);

  // Close the dialog using isActive
  isActive.value = false;
  step.value = 2
  // show.value = true
}


const submit = ()=>{
  console.log("click")
}

const back = ()=>{
  step.value = 1
}

const step = ref(1)
</script>

<template>
  <v-dialog style="max-width:60vw;" transition="my-slide-up" v-if="step === 1"  >
    <template #activator="{ props: activatorProps }">
      <v-btn v-bind="activatorProps" append-icon="mdi-arrow-right" block
        class="bg-white d-flex justify-space-between">
        Select
        <template v-slot:append>
          <v-icon color="red" size="x-large"></v-icon>
        </template>
      </v-btn>
    </template>

    <template #default="{ isActive }">
      <v-card class="pa-0 ma-0">
        <v-card-title class="border-b-sm w-100">
          <p class="text-subtitle-1 font-weight-medium py-2">
            Registration Form
          </p>
        </v-card-title>
        <v-card-text class="pa-5 ma-0 card">
          <v-row class="pa-5">
            <v-col cols="12" class="py-0">
              <v-text-field variant="outlined" density="compact" label=""
                placeholder="As mentioned on your passport or government ID" />
            </v-col>
            <v-col cols="12" class="d-flex justify-start py-0 ma-0">
              <v-radio-group v-model="selectedIntro" inline class="pa-0">
                <template v-slot:label>
                  <div>Select Title </div>
                </template>
                <v-radio v-for="i in introTitle" :key="i"
                  class="px-2 text-subtitle-1 font-weight-medium" color="indigo" :value="i">
                  <template v-slot:label>
                    <div><strong class="text-black">{{ i }}</strong></div>
                  </template>
                </v-radio>
              </v-radio-group>
            </v-col>
            <v-col cols="6" class="py-0">
              <v-text-field label="First Name" variant="outlined" placeholder="Enter Your First Name" />
            </v-col>
            <v-col cols="6" class="py-0">
              <v-text-field label="Last Name" variant="outlined" placeholder="Enter Your Last Name" />
            </v-col>
            <v-col cols="12" class="py-0">
              <v-select label="Country" v-model="country" :items="countryList" variant="outlined" />
            </v-col>
            <v-col cols="6" class="py-0">
              <v-text-field label="Email" variant="outlined" placeholder="Enter Your Email" />
            </v-col>
            <v-col cols="6" class="py-0">
              <v-input variant="outlined" class="pa-0">
                <template v-slot:prepend>
                  <v-select v-model="selectedCountryCode" :items="countryList1"
                    item-text="displayText" class="pa-0 bg-grey-lighten-4" item-value="code"
                    hide-details dense solo style="min-width: 80px; margin-right:-18px;"
                    variant="outlined" />
                </template>
                <v-text-field v-model="phoneNumber" placeholder="Phone Number" hide-details dense
                  variant="outlined" class="pa-0" solo />
              </v-input>
            </v-col>
          </v-row>
        </v-card-text>
        <template #actions>
          <v-card-actions class="border-t-sm w-100 d-flex justify-end pa-2 ma-0">
            <v-btn size="large" class="bg-grey" text="Close" @click="isActive.value = false"></v-btn>
            <v-btn size="large" class="bg-red" text="Next" @click="goNext(isActive)"></v-btn>
          </v-card-actions>
        </template>
      </v-card>
    </template>
  </v-dialog>

  <sub-dialog v-if="step === 2"  @submit="submit" @back="back" />
</template>

<style scoped>
.card {
  max-height: 400px;
  overflow: auto;
}

.card::-webkit-scrollbar {
  width: 8px;
  border-radius: 20px;
}

.card::-webkit-scrollbar-track {
  background: rgba(128, 128, 128, 0.665);
}

.card::-webkit-scrollbar-thumb {
  background-color: white;
  border-radius: 20px;
  border: 2px solid rgba(128, 128, 128, 0.665);
}

.my-slide-up-enter-active,
.my-slide-up-leave-active {
  transition: transform 0.5s ease;
}

.my-slide-up-enter-from,
.my-slide-up-leave-to {
  transform: translateY(100%);
}
</style>
