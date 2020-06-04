<template>
    <ion-list>
        <!-- <ion-list-header>
            <ion-label>{{$t('bookingView.listHeader')}}</ion-label>
        </ion-list-header> -->
        <ion-item-divider>
            <ion-label color="dark">
                <strong style="font-size: 20px;">{{$t('bookingView.currentBooking')}}</strong>
            </ion-label>
        </ion-item-divider>
        <div v-for="(item, index) in listBooking"
             :key="index">
            <BookingListItem v-bind:item="item" v-bind:is-disabled="false" v-on:reload="$emit('reload')"/>
        </div>
        <ion-item-divider>
            <ion-label color="dark">
                <strong style="font-size: 20px;">{{$t('bookingView.history')}}</strong>
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
                ...mapActions(['loadBooking', 'loadUser']),
            }
        },
        computed: {
            ...mapGetters(['listBooking', 'listHistory', 'idUser']),
            indexBooking: function () {
                return this.listBooking.length
            }
        },
        mounted() {
            /*localStorage.listBooking = JSON.stringify([
                {
                    idUser: 1,
                    idRestaurant: 1,
                    date: new Date('2020-04-25 10:00:00 GMT+2'),
                    end:new Date(new Date('2020-04-25 10:00:00 GMT+2').setHours(new Date('2020-04-25 10:00:00 GMT+2').getHours() + 1)),                    people:2
                },
                {
                    idUser: 1,
                    idRestaurant: 2,
                    date: new Date('2020-04-25 10:00:00 GMT+2'),
                    end:new Date(new Date('2020-04-25 10:00:00 GMT+2').setHours(new Date('2020-04-25 10:00:00 GMT+2').getHours() + 1)),
                    people:2
                }, {
                    idUser: 1,
                    idRestaurant: 3,
                    date: new Date('2020-04-25 10:00:00 GMT+2'),
                    end:new Date(new Date('2020-04-25 10:00:00 GMT+2').setHours(new Date('2020-04-25 10:00:00 GMT+2').getHours() + 1)),                    people:2
                }, {
                    idUser: 1,
                    idRestaurant: 4,
                    date: new Date('2020-04-25 10:00:00 GMT+2'),
                    end:new Date(new Date('2020-04-25 10:00:00 GMT+2').setHours(new Date('2020-04-25 10:00:00 GMT+2').getHours() + 1)),                    people:2
                }, {
                    idUser: 1,
                    idRestaurant: 5,
                    date: new Date('2020-04-25 10:00:00 GMT+2'),
                    end:new Date(new Date('2020-04-25 10:00:00 GMT+2').setHours(new Date('2020-04-25 10:00:00 GMT+2').getHours() + 1)),                    people:2
                }, {
                    idUser: 1,
                    idRestaurant: 6,
                    date: new Date('2020-04-25 10:00:00 GMT+2'),
                    end:new Date(new Date('2020-04-25 10:00:00 GMT+2').setHours(new Date('2020-04-25 10:00:00 GMT+2').getHours() + 1)),                    people:2
                }, {
                    idUser: 1,
                    idRestaurant: 1,
                    date: new Date('2021-07-25 10:00:00 GMT+2'),
                    end:new Date(new Date('2021-07-25 10:00:00 GMT+2').setHours(new Date('2021-07-25 10:00:00 GMT+2').getHours() + 1)),
                    people:2
                }, {
                    idUser: 1,
                    idRestaurant: 2,
                    date: new Date('2021-06-25 00:00:00 GMT+2'),
                    end:new Date(new Date('2021-06-25 00:00:00 GMT+2').setHours(new Date('2021-06-25 00:00:00 GMT+2').getHours() + 1)),
                    people:2
                }, {
                    idUser: 1,
                    idRestaurant: 3,
                    date: new Date('2021-08-25 00:00:00 GMT+2'),
                    end:new Date(new Date('2021-08-25 00:00:00 GMT+2').setHours(new Date('2021-08-25 00:00:00 GMT+2').getHours() + 1)),
                    people:2
                }, {
                    idUser: 1,
                    idRestaurant: 4,
                    date: new Date('2021-08-25 00:00:00 GMT+2'),
                    end:new Date(new Date('2021-08-25 00:00:00 GMT+2').setHours(new Date('2021-08-25 00:00:00 GMT+2').getHours() + 1)),
                    people:2
                }, {
                    idUser: 1,
                    idRestaurant: 5,
                    date: new Date('2021-08-25 00:00:00 GMT+2'),
                    end:new Date(new Date('2021-08-25 00:00:00 GMT+2').setHours(new Date('2021-08-25 00:00:00 GMT+2').getHours() + 1)),
                    people:2
                }, {
                    idUser: 1,
                    idRestaurant: 6,
                    date: new Date('2021-08-26 00:00:00 GMT+2'),
                    end:new Date(new Date('2021-08-26 00:00:00 GMT').setHours(new Date('2021-08-26 00:00:00 GMT+2').getHours() + 1)),
                    people:2
                }])*/
            this.loadUser()
            this.loadBooking(this.idUser)


        },
        components: {
            BookingListItem,
        },

    }
</script>

<style scoped>

</style>
