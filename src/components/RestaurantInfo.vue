<template>
    <ion-card>
        <ion-card-header>
            <ion-card-title>Your Search</ion-card-title>
        </ion-card-header>

        <ion-card-content>
            You want a table for <b>{{peopeNumber}}</b> people in <b>{{localisation}}</b> the <b>{{getFormattedDate(date)}}</b> at <b>{{getFormattedHour(hour)}}</b>
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
        methods:
        {
            getFormattedDate : function(date){
            let year = date.getFullYear();
            let month = (1 + date.getMonth()).toString().padStart(2, '0');
            let day = date.getDate().toString().padStart(2, '0');
        
            return month + '/' + day + '/' + year;
        },
        getFormattedHour : function(date){
            let hour = date.getHours();
            let minute = date.getMinutes();
        
            return hour + ':' + minute;
        },
        }
    }
</script>

<style scoped>

</style>
