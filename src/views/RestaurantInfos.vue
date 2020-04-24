<template>
    <ion-app>
        <ImageHeader/>
        <ion-content >
        <h2>{{ restaurant.name }}</h2>
            <BookingInfoCard/>
            <OccupationCard/>
            <LocationCard/>
        </ion-content>
    </ion-app>
</template>

<script>
    import ImageHeader from "../components/ImageHeader"
    import BookingInfoCard from "../components/BookingInfoCard";
    import OccupationCard from "../components/OccupationCard";
    import LocationCard from "../components/LocationCard";

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
        }
    }
</script>

<style scoped>

</style>
