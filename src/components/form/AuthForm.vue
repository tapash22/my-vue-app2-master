<script setup lang="ts">
import { ref } from 'vue';
const dialog = ref(false)

</script>
docker run -d -p 8081:8080 -p 50000:50000 --name jenkins -v C:/Users/Tapash/Desktop/jenkins_home:/var/jenkins_home jenkins/jenkins


<template>
  <div class="pa-4 text-center">
    <v-dialog v-model="dialog" max-width="600">
      <template v-slot:activator="{ props: activatorProps }">
        <v-btn class="text-none font-weight-regular" prepend-icon="mdi-account" variant="text"
          v-bind="activatorProps"></v-btn>
      </template>

      <v-card title="User Profile">
        <template v-slot:prepend>
          <v-icon icon="mdi-account"></v-icon>
        </template>
        <v-card-text>
          <v-row dense>
            <v-col cols="12" md="6" sm="6">
              <v-text-field label="First name*" required variant="outlined"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" sm="6">
              <v-text-field hint="example of helper text only on focus" label="Middle name" variant="outlined"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" sm="6">
              <v-text-field label="Email*" required variant="outlined"></v-text-field>
            </v-col>

            <v-col cols="12" md="6" sm="6">
              <v-text-field label="Password*" type="password" required variant="outlined"></v-text-field>
            </v-col>

            <v-col cols="12" sm="6">
              <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*" required variant="outlined"></v-select>
            </v-col>

            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                label="Interests" auto-select-first multiple variant="outlined"></v-autocomplete>
            </v-col>
          </v-row>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn text="Close" variant="plain" @click="dialog = false"></v-btn>

          <v-btn color="primary" text="Save" variant="tonal" @click="dialog = false"></v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
