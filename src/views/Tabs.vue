<template>
    <ion-app>
        <ion-tabs>
              <ion-tab tab="booking">
                <ion-vue-router name="booking"></ion-vue-router>
            </ion-tab>
            <ion-tab tab="restaurant">
                <ion-vue-router name="restaurant"></ion-vue-router>
            </ion-tab>

            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="booking">
                    <ion-icon name="book"></ion-icon>
                    <ion-label>Booking</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="restaurant">
                    <ion-icon name="restaurant"></ion-icon>
                    <ion-label>Search</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-app>
</template>

<script>

    export default {
        name: "Tabs",
    }
</script>

<style scoped>

</style>
