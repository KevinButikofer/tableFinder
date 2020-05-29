<template>
    <ion-list>
        <ion-list-header>
            <ion-label>Booking informations</ion-label>
        </ion-list-header>
        <ion-item-divider>
            <ion-label>
                your booked restaurant
            </ion-label>
        </ion-item-divider>
        <div v-for="(item, index) in listBooking"
             :key="index"
             v-bind:item="item">
            <ion-item-divider v-if="index == indexHistory ">
                <ion-label>
                    History
                </ion-label>
            </ion-item-divider>
            <BookingListItem v-bind:item="item" v-on:reload="$emit('reload')"/>
        </div>

    </ion-list>
</template>

<script>
    import BookingListItem from "./BookingListItem";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "BookingList",
        data() {
            return {
                ...mapActions(['loadBooking']),
                indexHistory: 0,
            }
        },
        computed: {
            ...mapGetters(['listBooking']),
        },
        mounted() {
            localStorage.listBooking = JSON.stringify([{id: 1, date: new Date()}, {id: 2, date: new Date()}, {
                id: 3,
                date: new Date()
            }, {id: 4, date: new Date()}, {id: 5, date: new Date()}, {id: 6, date: new Date()}, {
                id: 1,
                date: new Date('2021-08-25T00:00:00')
            }, {id: 2, date: new Date('2021-08-25T00:00:00')}, {
                id: 3,
                date: new Date('2021-08-25T00:00:00')
            }, {id: 4, date: new Date('2021-08-25T00:00:00')}, {id: 5, date: new Date('2021-08-25T00:00:00')}, {
                id: 6,
                date: new Date('2021-08-25T00:00:00')
            }])

            this.loadBooking()

            let cpt = 0
            let first = true
            let date = new Date()
            this.listBooking.forEach(value => {
                if (new Date(value.date) < date && first) {
                    this.indexHistory = cpt
                    first = false
                }
                cpt++
            })


        },
        components: {
            BookingListItem,
        },

    }
</script>

<style scoped>

</style>
