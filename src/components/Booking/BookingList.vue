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
            <BookingListItem v-bind:item="item"/>
        </div>

    </ion-list>
</template>

<script>
    import BookingListItem from "./BookingListItem";

    export default {
        name: "BookingList",
        data() {
            return {
                indexHistory:0,
                listBooking: []
            }
        },
        mounted() {
            if (localStorage.listBooking) {
                let tempList = JSON.parse(localStorage.listBooking)
                this.listBooking = tempList.sort((a, b) => (a.date > b.date) ? -1 : 1)

                let cpt = 0
                let first = true
                let date = new Date()
                this.listBooking.forEach( value => {
                    console.log(value.date)
                    if(new Date(value.date) < date && first){
                        this.indexHistory = cpt
                        first = false
                        console.log(cpt)
                    }
                    cpt++
                })
            }

        },
        components: {
            BookingListItem,
        },

    }
</script>

<style scoped>

</style>
