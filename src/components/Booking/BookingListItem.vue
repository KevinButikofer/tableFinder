<template>
    <ion-item-sliding ref="slide" @click="showRestaurant()" >
        <ion-item-options>
            <ion-item-option button v-if="isDisabled" v-on:click.stop="deleteBooking" color="danger">
                <ion-icon name="trash"></ion-icon>
                {{$t('bookingView.delete')}}
            </ion-item-option>
            <ion-item-option button v-on:click.stop="slideButton" :color="colorButton">{{textButton}}</ion-item-option>
        </ion-item-options>
        <ion-item v-bind:class="{disabled : isDisabled}">

            <ion-thumbnail slot="start">
                <img :src="infoRestaurant.image">
            </ion-thumbnail>

            <ion-label>
                <h2>{{infoRestaurant.name}}</h2>
                <h3>{{infoRestaurant.address}}, {{infoRestaurant.city}}</h3>
                <p>
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
            ...mapActions(['removeBooking']),
            showRestaurant(){
                this.$store.dispatch("fetchSelectedRestaurant", this.infoRestaurant);
                this.$router.push({name: 'RestaurantInfo', params: {hideBook: 'true'}})
                console.log(this.$store.getters.selectedRestaurant);
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
                } else {
                    return this.$ionic.alertController
                        .create({
                            header: this.$t('bookingView.listHeader'),
                            inputs: [
                                // input date with min & max
                                {
                                    name: 'date',
                                    label: 'Date',
                                    type: 'Date',
                                    min: new Date().toISOString(),
                                    value: this.dateForm.toISOString()
                                },
                                // input date without min nor max
                                {
                                    name: 'start',
                                    label: 'Start',
                                    type: 'time',
                                    min: new Date().toTimeString(),
                                    value: this.startHour.toTimeString()
                                },
                                {
                                    name: 'end',
                                    label: 'End',
                                    type: 'time',
                                    min: new Date().toTimeString(),
                                    value: this.toHour.toTimeString()
                                },
                                {
                                    name: 'people',
                                    label: 'People',
                                    type: 'number',
                                    min: 1,
                                    value: this.peopleNumber
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: () => {
                                        this.$refs.slide.close()
                                    },
                                },
                                {
                                    text: 'Ok',
                                    handler: (info) => {
                                        this.dateForm = info.date
                                        this.startHour = `${new Date(info.date).toDateString()} ${info.start}`
                                        this.toHour = `${new Date(info.date).toDateString()} ${info.end}`
                                        this.peopleNumber = info.people
                                        this.showRestaurant()
                                    },
                                },
                            ],
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
            this.date = date.toUTCString().slice(0, -3)
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
