<template>
    <ion-item-sliding ref="slide">
        <ion-item-options side="end">
            <ion-item-option v-if="isDisabled" @click="deleteBooking()" color="danger">
                <ion-icon name="trash"></ion-icon>
                Delete
            </ion-item-option>
            <ion-item-option @click="slideButton()" :color="colorButton">{{textButton}}</ion-item-option>
        </ion-item-options>
        <ion-item v-bind:class="{disabled : isDisabled}">

            <ion-thumbnail slot="start">
                <img :src="infoRestaurant.image">
            </ion-thumbnail>

            <ion-badge v-if="infoRestaurant.place > 0 && isDisabled" color="success" slot="end">{{infoRestaurant.place}}
            </ion-badge>
            <ion-badge v-else-if="isDisabled" color="danger" slot="end">{{infoRestaurant.place}}</ion-badge>

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
