<template>
    <ion-item-sliding>
        <ion-item-options side="end">
            <ion-item-option :color="colorButton">{{textButton}}</ion-item-option>
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

    export default {
        props: ['item'],
        name: "BookingListItem",
        data() {
            return {
                colorButton:"danger",
                textButton : "Cancel",
                MAXNOTE: MAXNOTE,
                isDisabled: false,
                infoRestaurant: {},
                date : "",
            }
        },
        mounted() {
            let date = new Date(this.item.date)
            if( date < new Date()){
                this.isDisabled = true
                this.textButton = "Rebook"
                this.colorButton="success"
            }
            RESTAURANTS.forEach(value => {
                if (value.id == this.item.id) {
                    this.infoRestaurant = value
                }
            })
            this.date = date.toUTCString().slice(0,-3)
        },
    }
</script>

<style scoped>
    .disabled {
        color: #EBEBE4;
    }
</style>
