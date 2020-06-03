<template>
    <ion-app>
        <ImageHeader/>
        <ion-content>
            <BookingInfoCard :restName="restaurant.name"/>
            <OccupationCard/>
            <LocationCard/>
            <!-- <BookingDetailCard/> -->
        </ion-content>
        <ion-footer translucent="true">
            <ion-toolbar v-if="$route.params.book || cancelItem">
                <ion-button v-if="cancelItem && !$route.params.book" class="ion-margin" @click="cancelBooking()" expand="block" color="danger">
                    Cancel
                </ion-button>
                <ion-button v-else-if="$route.params.book" class="ion-margin" @click="bookCurrentRest()" expand="block" color="success">Book
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
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "RestaurantInfos",
        computed: {
            ...mapGetters(['idUser', 'connected', 'toHour', 'peopleNumber', 'startHour','cancelItem', 'selectItem',]),
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
            ...mapActions(['removeBooking','fetchPeopleNumber','fetchToHour','fetchStartHour','fetchDate','fetchStartHour']),
            cancelBooking() {
                return this.$ionic.alertController
                    .create({
                        header: `${this.restaurant.name} booking`,
                        subHeader: `${new Date(this.selectItem.date).toDateString()} ${new Date(this.selectItem.date).toLocaleTimeString().slice(0, -3)}`,
                        message: `Do you really want to cancel your booking `,
                        buttons: [{
                            text: 'Yes',
                            handler: () => {
                                this.removeBooking(this.selectItem)
                                this.$router.back()
                            }
                        }, {
                            text: 'No',
                            role: 'cancel',
                        }],
                    })
                    .then(a => a.present())
            },
            doRefresh(event) {
                console.log('Begin async operation');

                setTimeout(() => {
                    console.log('Async operation has ended');
                    event.target.complete();
                }, 2000);

            },
            bookCurrentRest() {
                if (this.connected) {
                    return this.$ionic.alertController
                        .create({
                            header: `${this.restaurant.name} booking`,
                            subHeader: `${this.dateS.toDateString()} ${this.dateS.toLocaleTimeString().slice(0, -3)}`,
                            message: `Confirm Booking for ${this.peopleNumber} people`,
                            buttons: [{
                                text: 'Yes',
                                handler: () => {
                                    this.$store.dispatch('addBooking', {
                                        idUser: this.idUser,
                                        idRestaurant: this.restaurant.id,
                                        date: this.dateS,
                                        end: this.toHour,
                                        people: this.peopleNumber
                                    },this.idUser())
                                    this.$router.push('/')

                                }
                            }, {
                                text: 'No',
                                role: 'cancel',
                                handler: () => {
                                    this.$refs.slide.close()
                                }
                            }],
                        })
                        .then(a => a.present())

                } else {
                    this.$router.push({name: 'login'})
                }
            },


        },
        components: {
            ImageHeader,
            BookingInfoCard,
            OccupationCard,
            LocationCard,
        },
        mounted() {
            console.log(this.cancelItem)
            console.log(this.$route.params.hideBook)
        }
    }
</script>

<style scoped>

</style>
