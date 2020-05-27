<template>
    <ion-item v-bind:class="{disabled : isDisabled}">
        {{item.date}}
    </ion-item>
</template>

<script>
    import {RESTAURANTS} from "../../datas/restaurants";
    export default {
        props: ['item'],
        name: "BookingListItem",
        data() {
            return {
                isDisabled:false,
                infoRestaurant : {},
            }
        },
        mounted() {
            console.log(this.item.date)
            this.isDisabled = new Date(this.item.date) < new Date()
            RESTAURANTS.forEach(value => {
                if(value.id == this.item.id){
                    this.infoRestaurant = value
                }
            })
        },
    }
</script>

<style scoped>
    .disabled {
        color: #EBEBE4;
    }
</style>
