<template>
    <ion-item-sliding ref="slide">
        <ion-item-options >
            <ion-item-option  v-if="isDisabled" @click="deleteBooking()" color="danger">
                <ion-icon name="trash"></ion-icon>
                Delete
            </ion-item-option>
            <ion-item-option  @click="slideButton()" :color="colorButton">{{textButton}}</ion-item-option>
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
                textButton: "Cancel",
                MAXNOTE: MAXNOTE,
                infoRestaurant: {},
                date: "",
            }
        },
        methods: {
            ...mapActions(['removeBooking']),
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
                }else{
                    return this.$ionic.alertController
                        .create({
                            cssClass: 'my-custom-class',
                            header: 'Prompt!',
                            inputs: [
                                {
                                    placeholder: 'Placeholder 1',
                                },
                                {
                                    name: 'name2',
                                    id: 'name2-id',
                                    value: 'hello',
                                    placeholder: 'Placeholder 2',
                                },
                                {
                                    name: 'name3',
                                    value: 'http://ionicframework.com',
                                    type: 'url',
                                    placeholder: 'Favorite site ever',
                                },
                                // input date with min & max
                                {
                                    name: 'name4',
                                    type: 'time',
                                    min: '2017-03-01',
                                    max: '2018-01-12',
                                },
                                // input date without min nor max
                                {
                                    name: 'name5',
                                    type: 'date',
                                },
                                {
                                    name: 'name6',
                                    type: 'number',
                                    min: -5,
                                    max: 10,
                                },
                                {
                                    name: 'name7',
                                    type: 'number',
                                },
                            ],
                            buttons: [
                                {
                                    text: 'Cancel',
                                    role: 'cancel',
                                    cssClass: 'secondary',
                                    handler: () => {
                                        console.log('Confirm Cancel')
                                    },
                                },
                                {
                                    text: 'Ok',
                                    handler: () => {
                                        console.log('Confirm Ok')
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
                this.textButton = "Rebook"
                this.colorButton = "success"
            }
            RESTAURANTS.forEach(value => {
                if (value.id == this.item.id) {
                    this.infoRestaurant = value
                }
            })
            this.date = date.toUTCString().slice(0, -3)
        },
        computed: {
            ...mapGetters(['listBooking']),
        },
    }
</script>

<style scoped>
    .disabled {
        color: #EBEBE4;
    }
</style>
