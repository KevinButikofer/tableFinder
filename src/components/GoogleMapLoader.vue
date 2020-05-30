<template>
  <div>
    <div class="google-map" ref="googleMap"></div>
  </div>
</template>


<script>
import GoogleMapsApiLoader from 'google-maps-api-loader'

export default {
  name: "GoogleMapLoader",
  props: {
    mapConfig: Object,
    apiKey: String,
  },
  data() {
  return {
    google: null,
    map: null
  }
},
computed: {
             restaurant :{
                get()  {
                    return this.$store.getters.selectedRestaurant
                }
            },
        },
  async mounted() {
    const googleMapApi = await GoogleMapsApiLoader({
      apiKey: this.apiKey
    })
    this.google = googleMapApi
    this.initializeMap()
  },

  methods: {
    initializeMap() {
      const mapContainer = this.$refs.googleMap
      this.map = new this.google.maps.Map(mapContainer, this.mapConfig)

    var myLatLng = {lat: this.restaurant.lat, lng: this.restaurant.lng};
    var marker = new this.google.maps.Marker({
    position: myLatLng,
    map: this.map,
    title: this.restaurant.name
    });    
    this.map.panTo(myLatLng);
    marker.setMap(this.map);
    }
  }
}


  </script>
  <style  scoped>
  
.google-map{
  height: 200px;
}
  </style>