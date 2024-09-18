<script setup lang="ts">
import { computed, ref } from "vue"

import CardPaymentDetails from './CardPaymentDetails.vue'
import CardInfoDetails from './CardInfoDetails.vue'
import CardActionComponent from './CardActionComponent.vue'
import CardHaderTitle from './CardHaderTitle.vue'
import type { Flight } from '../../typing/flight'


const flight = ref<Flight[]>([
    {
        id: 1,
        name: 'flight name',
        fromDate: '02-07-24',
        toDate: '02-07-24',
        flightType: 'local',
        ticket: [
            {
                id: 1,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            },
            {
                id: 2,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            },
            {
                id: 3,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            },
            {
                id: 4,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        name: 'flight name',
        fromDate: '02-07-24',
        toDate: '02-07-24',
        flightType: 'local',
        ticket: [
            {
                id: 1,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            },
            {
                id: 2,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            },
            {
                id: 3,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            },
            {
                id: 4,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'flight name',
        fromDate: '02-07-24',
        toDate: '02-07-24',
        flightType: 'local',
        ticket: [
            {
                id: 1,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            },
            {
                id: 2,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            },
            {
                id: 3,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            },
            {
                id: 4,
                setNumber: '1',
                takeOff: 'date',
                landing: 'date',
                price: 3000,
                setType: 'economy',
                positionType: 'window set',
                carryWeightDetails: [
                    {
                        id: 1,
                        title: 'Flight',
                        value: 'DAC-CBX'
                    },
                    {
                        id: 2,
                        title: 'Cabin',
                        value: '7KG'
                    },
                    {
                        id: 3,
                        title: 'Check-in',
                        value: '20KG'
                    },
                ]
            }
        ]
    }
])

const trip = ref({
    name: '',
    location: null,
    start: null,
    end: null,
})
export interface Fdetails {
    id: number | null
    title: string | null
    value: string | null
}

const flightDetails = ref<Fdetails[]>([
    {
        id: 1,
        title: 'Flight',
        value: 'DAC-CBX'
    },
    {
        id: 2,
        title: 'Cabin',
        value: '7KG'
    },
    {
        id: 3,
        title: 'Check-in',
        value: '20KG'
    },
])

const currentDate = new Date()

const fromDate = computed(() => {
    return formatDate(currentDate)
})

function formatDate(date: any) {
    const optionsDate = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric',
    };
    const optionsTime = {
        hour: 'numeric',
        minute: 'numeric',
    };
    const time = date.toLocaleTimeString('en-US', optionsTime);
    const datePart = date.toLocaleDateString('en-US', optionsDate);
    return `${time}, ${datePart}`;
}

</script>

<template>
    <v-expansion-panels class="border border-sm my-3" >
        <v-expansion-panel class="w-full overflow-hidden">
            <v-row class="w-full h-full">
                <card-hader-title />
            </v-row>
            <v-expansion-panel-title class="bg-grey-lighten-4 pa-0 ma-0 ">
                <card-action-component />
            </v-expansion-panel-title>
            <v-expansion-panel-text class="pa-0 ma-0">
                <v-row class="w-100 h-auto pa-0 ma-0 d-flex justify-center align-center">
                    <v-col :cols="6" class="w-100 h-100 d-flex justify-center align-center ">
                        <card-info-details :fromDate="fromDate" />
                    </v-col>
                    <v-col :cols="6" class="w-100 h-full d-block pa-2">
                        <card-payment-details :flightDetails="flightDetails" />
                    </v-col>
                </v-row>
            </v-expansion-panel-text>
        </v-expansion-panel>
    </v-expansion-panels>
</template>