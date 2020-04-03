<template>  
    <ion-grid>
      <ion-row>
        <ion-col> 
        <h1>Restaurants View</h1>
        </ion-col> 
      </ion-row>
       <ion-row>
        <ion-col>      
          <Restaurants/>
        </ion-col>
      </ion-row>
    </ion-grid>
</template>

<script>
// @ is an alias to /src
import Restaurants from '@/components/Restaurants.vue'

export default {
  name: 'RestaurantsView',
  components: {
    Restaurants
  }
}
</script>