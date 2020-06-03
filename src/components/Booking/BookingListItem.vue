<template>
    <ion-item-sliding ref="slide" @click="showRestaurant()">
        <ion-item-options>
            <ion-item-option button v-if="isDisabled" v-on:click.stop="deleteBooking" color="danger">
                <ion-icon name="trash"></ion-icon>
                {{$t('bookingView.delete')}}
            </ion-item-option>
            <ion-item-option v-if="!isDisabled" button v-on:click.stop="slideButton" :color="colorButton">{{textButton}}</ion-item-option>
        </ion-item-options>
        <ion-item v-bind:class="{disabled : isDisabled}">

            <ion-thumbnail slot="start">
                <img :src="infoRestaurant.image">
            </ion-thumbnail>
            
            <p slot="end" class="ion-text-wrap" style="font-size: 20px;">{{item.people}}</p>
            <ion-icon slot="end" name="person"></ion-icon>            
            <ion-label>
                <h2>{{infoRestaurant.name}}</h2>
                <h3>{{infoRestaurant.address}}, {{infoRestaurant.city}}</h3>
                <p v-bind:class="{disabled : isDisabled}">
                    <ion-icon v-for="(n,index) in infoRestaurant.rating" :key="index" name="star"></ion-icon>
                    <ion-icon v-for="(x,index1) in (MAXNOTE-infoRestaurant.rating)" :key="index1+MAXNOTE"
                              name="star-outline">
                    </ion-icon>
                    <ion-label>{{date}}</ion-label>
                </p>
            </ion-label>
        </ion-item>
    </ion-item-sliding>
</template>

<script>
    import {RESTAURANTS} from "../../datas/restaurants";
    import {MAXNOTE} from "../../datas/notes"
    import {mapActions, mapGetters} from "vuex";

    export default {
        props: ['item', 'isDisabled'],
        name: "BookingListItem",
        data() {
            return {
                colorButton: "danger",
                textButton: this.$t('bookingView.cancel'),
                MAXNOTE: MAXNOTE,
                infoRestaurant: {},
                date: "",
            }
        },
        methods: {
            ...mapActions(['removeBooking', 'fetchPeopleNumber', 'fetchDate', 'fetchStartHour', 'fetchToHour', 'fetchSelectItem']),
            showRestaurant() {
                this.fetchSelectItem({item: this.item, cancel: !this.isDisabled})
                this.fetchStartHour(new Date(this.item.date))
                this.fetchToHour(new Date(this.item.end))
                this.fetchDate(new Date(this.item.date))
                this.fetchPeopleNumber(this.item.people)
                this.$store.dispatch("fetchSelectedRestaurant", this.infoRestaurant);
                this.$router.push({name: 'RestaurantInfo', params: {book: false}})
            },
            deleteBooking() {
                this.removeBooking(this.item)
                this.$emit('reload')
            },
            slideButton() {
                if (!this.isDisabled) {
                    return this.$ionic.alertController
                        .create({
                            header: `${this.infoRestaurant.name} booking`,
                            subHeader: `${this.date}`,
                            message: `Do you really want to cancel your booking `,
                            buttons: [{
                                text: 'Yes',
                                handler: () => {
                                    this.removeBooking(this.item)
                                    this.$emit('reload')
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

                }
            }
        },
        mounted() {
            let date = new Date(this.item.date)
            if (this.isDisabled) {
                this.textButton = this.$t('bookingView.rebook')
                this.colorButton = "success"
            }
            RESTAURANTS.forEach(value => {
                if (value.id == this.item.idRestaurant) {
                    this.infoRestaurant = value
                }
            })
            this.date = `${date.toDateString()} ${date.toLocaleTimeString().slice(0, -3)}`
        },
        computed: {
            ...mapGetters(['listBooking']),
            dateForm: {
                get() {
                    return this.$store.getters.date
                },
                set(value) {
                    this.$store.dispatch('fetchDate', new Date(value))
                }
            },
            startHour: {
                get() {
                    return this.$store.getters.startHour
                },
                set(value) {
                    this.$store.dispatch('fetchStartHour', new Date(value));
                }
            },
            toHour: {
                get() {
                    return this.$store.getters.toHour
                },
                set(value) {
                    //alert(value);
                    //alert(new Date());
                    this.$store.dispatch('fetchToHour', new Date(value));
                }
            },
            peopleNumber: {
                get() {
                    return this.$store.getters.peopleNumber
                },
                set(value) {
                    this.$store.dispatch('fetchPeopleNumber', value)
                },
            },
            maxDate: {
                get() {
                    var max = new Date();
                    max.setMonth(max.getMonth() + 1);
                    return max.toISOString();
                }
            },
        },
    }
</script>

<style scoped>
    .disabled {
        color: #EBEBE4;
    }
</style>
