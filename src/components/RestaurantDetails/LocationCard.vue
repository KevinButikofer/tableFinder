<template>
    <ion-card>
      <!-- <ion-card-header>
        <ion-card-title>Location</ion-card-title>
      </ion-card-header>-->
      <ion-card-content no-padding>
          <GoogleMapLoader
          :mapConfig="{
  center: { lat: 46.990438, lng: 6.929677},
  zoom: 16,
 disableDefaultUI: true,
  gestureHandling: 'none',
}"
        apiKey="AIzaSyB30l5UQktpaVC4ylmtHR02w4BTfDKdHg4"
      />
      </ion-card-content>
    </ion-card>
</template>

<script>
import GoogleMapLoader from '../GoogleMapLoader'
  export default {
      name: "BookingInfoCard", 
  components: {
    GoogleMapLoader
  },
      
  }
</script>
<style scoped>
ion-card {
text-align:left;
}
</style>
