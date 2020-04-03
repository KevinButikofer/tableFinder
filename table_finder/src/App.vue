<template>
  <ion-app id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> | 
      <router-link to="/restaurantViews">Restaurants</router-link>
    </div>
    <router-view/> -->
    <ion-vue-router></ion-vue-router>

  <ion-tabs>
  <ion-tab tab="/">
    <ion-router name="/"></ion-router>
  </ion-tab>

  <ion-tab tab="about">
    <ion-router name="about"></ion-router>
  </ion-tab>

  <ion-tab tab="restaurantsview">
    <ion-router name="restaurantsview"></ion-router>
  </ion-tab>

  <ion-tab-bar slot="bottom">

    <ion-tab-button tab="/">
      <ion-icon name="navigate"></ion-icon>
      <ion-label>Home</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="about">
      <ion-icon name="person"></ion-icon>
      <ion-label>My Details</ion-label>
    </ion-tab-button>

    <ion-tab-button tab="restaurantsview">
      <ion-icon name="bookmarks"></ion-icon>
      <ion-label>Camp Details</ion-label>
    </ion-tab-button>

  </ion-tab-bar>

</ion-tabs>


  </ion-app>
</template>
<script>
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
