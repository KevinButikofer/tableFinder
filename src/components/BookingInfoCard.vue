<template>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Booking informations</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        For <span>{{peopleNumber}}</span> pepole <br/>
        The <span>{{getFormattedDate(date)}}</span> <br/>
        From <span>{{getFormattedHour(startHour)}}</span> to <span>{{getFormattedHour(toHour)}}</span>
      </ion-card-content>
    </ion-card>
</template>

<script>
  export default {
      name: "BookingInfoCard",
      computed :
      {
        date: {
              get() {
                  return this.$store.getters.date
              },
          },
        startHour: {
            get() {
                return this.$store.getters.startHour
            },
        },
        toHour: {
            get() {
                return this.$store.getters.toHour
            },
        },
        peopleNumber:{
            get() {
                return this.$store.getters.peopleNumber
            },
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
</style>
