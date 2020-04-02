<template>
  <div class="restaurantsView">
    <h1>Restaurants View</h1>
    <Restaurants msg="toto"/>
  </div>
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