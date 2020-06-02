<template>
    <ion-app>
        <ImageHeader/>
        <ion-content >
        <h1>{{ restaurant.name }}</h1>
            <BookingInfoCard/>
            <OccupationCard/>
            <LocationCard/>
            <BookingDetailCard/>
        </ion-content>
        <ion-footer translucent="true">
            <ion-toolbar>
                <ion-button class="ion-margin" @click="bookCurrentRest()" expand="block" color="success">Book</ion-button>
            </ion-toolbar>
        </ion-footer>
    </ion-app>
</template>

<script>
    import ImageHeader from "../components/RestaurantDetails/ImageHeader"
    import BookingInfoCard from "../components/RestaurantDetails/BookingInfoCard";
    import OccupationCard from "../components/RestaurantDetails/OccupationCard";
    import LocationCard from "../components/RestaurantDetails/LocationCard";
    import BookingDetailCard from"../components/Booking/BookingDetailCard";

    export default {
        name: "RestaurantInfos",

        computed: {
             restaurant :{
                get()  {
                    return this.$store.getters.selectedRestaurant
                }
             },
            dateS :{
                get()  {
                    return this.$store.getters.date
                }
            },
        },
        methods:{
            doRefresh(event) {
                console.log('Begin async operation');

                setTimeout(() => {
                    console.log('Async operation has ended');
                    event.target.complete();
                }, 2000);

            },
            bookCurrentRest()
            {                
                var bookingDate = this.dateS
                bookingDate.setHours(this.dateS.getHours() + 2)
                this.$store.dispatch('addBooking', {id : this.restaurant.id, date: bookingDate, nbPersonne: this.restaurant.nbPersonne})
            }

        },
        components: {
            ImageHeader,
            BookingInfoCard,
            OccupationCard,
            LocationCard,
            BookingDetailCard,
        } 
    }
</script>

<style scoped>

</style>
