<template>
    <ion-app>
        <ImageHeader/>
        <ion-content>
            <BookingInfoCard :restName="restaurant.name"/>
            <OccupationCard/>
            <LocationCard/>
            <!-- <BookingDetailCard/> -->
        </ion-content>
        <ion-footer v-show="!$route.params.hideBook" translucent="true">
            <ion-toolbar>
                <ion-button class="ion-margin" @click="bookCurrentRest()" expand="block" color="success">Book
                </ion-button>
            </ion-toolbar>
        </ion-footer>
    </ion-app>
</template>

<script>
    import ImageHeader from "../components/RestaurantDetails/ImageHeader"
    import BookingInfoCard from "../components/RestaurantDetails/BookingInfoCard";
    import OccupationCard from "../components/RestaurantDetails/OccupationCard";
    import LocationCard from "../components/RestaurantDetails/LocationCard";
    import {mapGetters} from 'vuex'

    export default {
        name: "RestaurantInfos",

        computed: {
            ...mapGetters(['idUser','connected']),
            restaurant: {
                get() {
                    return this.$store.getters.selectedRestaurant
                }
            },
            dateS: {
                get() {
                    return this.$store.getters.date
                }
            },
        },
        methods: {
            doRefresh(event) {
                console.log('Begin async operation');

                setTimeout(() => {
                    console.log('Async operation has ended');
                    event.target.complete();
                }, 2000);

            },
            bookCurrentRest() {
                if(this.connected){
                    var bookingDate = this.dateS
                    bookingDate.setHours(this.dateS.getHours() + 2)
                    this.$store.dispatch('addBooking', {
                        idUser: this.idUser,
                        idRestaurant: this.restaurant.id,
                        date: bookingDate,
                        nbPersonne: this.restaurant.nbPersonne
                    })
                    this.$router.push('/')
                }else{
                    this.$router.push({name:'login'})
                }

            }

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
