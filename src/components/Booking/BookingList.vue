<template>
    <ion-list>
        <!-- <ion-list-header>
            <ion-label>{{$t('bookingView.listHeader')}}</ion-label>
        </ion-list-header> -->
        <ion-item-divider>
            <ion-label>
                {{$t('bookingView.currentBooking')}}
            </ion-label>
        </ion-item-divider>
        <div v-for="(item, index) in listBooking"
             :key="index">
            <BookingListItem v-bind:item="item" v-bind:is-disabled="false" v-on:reload="$emit('reload')"/>
        </div>
        <ion-item-divider>
            <ion-label>
                {{$t('bookingView.history')}}
            </ion-label>
        </ion-item-divider>
        <div v-for="(item, index) in listHistory"
             :key="index + indexBooking">
            <BookingListItem v-bind:item="item" v-bind:is-disabled="true" v-on:reload="$emit('reload')"/>
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
            }
        },
        computed: {
            ...mapGetters(['listBooking','listHistory']),
            indexBooking:function(){
                return this.listBooking.length
            }
        },
        mounted() {
            localStorage.listBooking = JSON.stringify([{id: 1, date: new Date()}, {id: 2, date: new Date()}, {
                id: 3,
                date: new Date()
            }, {id: 4, date: new Date('2020-05-29T19:53:00')}, {id: 5, date: new Date()}, {id: 6, date: new Date()}, {
                id: 1,
                date: new Date('2021-07-25T00:00:00')
            }, {id: 2, date: new Date('2021-06-25T00:00:00')}, {
                id: 3,
                date: new Date('2021-08-25T00:00:00')
            }, {id: 4, date: new Date('2021-08-25T00:00:00')}, {id: 5, date: new Date('2021-08-25T00:00:00')}, {
                id: 6,
                date: new Date('2021-08-26T00:00:00')
            }])

            this.loadBooking()


        },
        components: {
            BookingListItem,
        },

    }
</script>

<style scoped>

</style>
