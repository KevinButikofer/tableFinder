<template>
    <ion-card>
        <ion-card-content>
            Results for a table for <b>{{peopleNumber}}</b> people in <b>{{localisation}}</b> the <b>{{date}}</b> at <b>{{hour}}</b>
        </ion-card-content>
    </ion-card>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "RestaurantInfo",
        computed: {
            ...mapGetters(['localisation', 'peopleNumber']),
            date: function(){
                return this.getFormattedDate(this.$store.getters.date)
            },
            hour: function(){
                return this.getFormattedHour(this.$store.getters.startHour)
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
            let hour = date.getHours().toString().padStart(2, '0');
            let minute = date.getMinutes().toString().padStart(2, '0');

            return hour + ':' + minute;
        },
        }
    }
</script>

<style scoped>

</style>
