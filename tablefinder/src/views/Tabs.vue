<template>
    <ion-app>
        <ion-tabs>
            <ion-tab tab="home" >
                <Home/>
            </ion-tab>

            <ion-tab tab="about">
                <ion-vue-router name="about"></ion-vue-router>
            </ion-tab>
            <ion-tab tab="restaurant">
                <RestaurantView/>
            </ion-tab>

            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="home">
                    <ion-icon name="navigate"></ion-icon>
                    <ion-label>Home</ion-label>
                </ion-tab-button>

                <ion-tab-button tab="about">
                    <ion-icon name="person"></ion-icon>
                    <ion-label>About</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="restaurant">
                    <ion-icon name="bookmarks"></ion-icon>
                    <ion-label>Restaurant</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-app>
</template>

<script>
    import Home from "./Home";
    import RestaurantView from "./RestaurantView";
    export default {
        name: "Tabs",
        components:{
            Home,
            RestaurantView
        }
    }
</script>

<style scoped>

</style>
