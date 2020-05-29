<template>
    <ion-app>
        <ImageHeader/>
        <ion-content >
        <h2>{{ restaurant.name }}</h2>
            <BookingInfoCard/>
            <OccupationCard/>
            <LocationCard/>
            <BookingDetailCard/>
        </ion-content>
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
        },
        methods:{
            doRefresh(event) {
                console.log('Begin async operation');

                setTimeout(() => {
                    console.log('Async operation has ended');
                    event.target.complete();
                }, 2000);

            },

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
