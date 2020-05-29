<template>
    <ion-card>
       <ion-card-header>
        <ion-card-title>Are you sure you want to book at </ion-card-title>
      </ion-card-header>
        <ion-card-content>
        <h2><b> {{restaurant.name}} </b> in <b>{{restaurant.city}}</b></h2>
        <h2> At the <b>{{date}}</b> at <b>{{hour}}</b><b> to {{toHour}}</b> </h2>
        <h2> For <b>{{peopleNumber}}</b> people</h2>
        
        <ion-grid>            
                <ion-row>
                    <ion-col size="6">
                    <ion-button color="primary">Confirm</ion-button>
                    </ion-col>
                     <ion-col size="6">    
                    <ion-button color="primary">Cancel</ion-button>
                    </ion-col>
                </ion-row> 
        </ion-grid>
        </ion-card-content>
    </ion-card>
</template>

<script>
    import {mapGetters} from 'vuex'

    export default {
        name: "BookingDetailCard",
        computed: {
            ...mapGetters(['localisation', 'peopleNumber']),
            date: function(){
                return this.getFormattedDate(this.$store.getters.date)
            },
            hour: function(){
                return this.getFormattedHour(this.$store.getters.startHour)
            },
            toHour: function(){
                return this.getFormattedHour(this.$store.getters.toHour)
            },
            restaurant :{
                get()  {
                    return this.$store.getters.selectedRestaurant
                }
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
ion-card {
text-align:left;
}
ion-grid {
text-align:center;
}
</style>
