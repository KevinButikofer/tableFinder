<template>
    <ion-list>
        <ion-list-header>
            <ion-label>Booking informations</ion-label>
        </ion-list-header>
        <BookingListItem v-for="(item, index) in listBooking"
                         :key="index"
                         v-bind:item="item">
        </BookingListItem>
    </ion-list>
</template>

<script>
    import BookingListItem from "./BookingListItem";

    export default {
        name: "BookingList",
        data() {
            return {
                listBooking: []
            }
        },
        mounted() {
            if (localStorage.listBooking) {
                this.listBooking = JSON.parse(localStorage.listBooking)
            }
        },
        components: {
            BookingListItem,
        },

    }
</script>

<style scoped>

</style>
