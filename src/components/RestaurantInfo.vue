<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>Your Search</ion-card-title>
        </ion-card-header>

        <ion-card-content>
            You want a table for <b>{{peopeNumber}}</b> people in <b>{{localisation}}</b> the <b>{{date}}</b> at <b>{{hour}}</b>
        </ion-card-content>
    </ion-card>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "RestaurantInfo",
        computed: {
            ...mapGetters(['localisation', 'peopeNumber']),
            date: function(){
                return this.$store.getters.date
            },
            hour: function(){
                return this.$store.getters.startHour
            },
        },
    }
</script>

<style scoped>

</style>
