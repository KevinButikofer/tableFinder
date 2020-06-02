<template>
    <ion-app>
        <ion-tabs>
            <ion-tab tab="home">
                <Home/>
            </ion-tab>

            <ion-tab tab="booking">
                <BookingView/>
            </ion-tab>
            <ion-tab tab="restaurant">
                <RestaurantView/>
            </ion-tab>

            <ion-tab-bar slot="bottom">
                <ion-tab-button tab="booking">
                    <ion-icon name="book"></ion-icon>
                    <ion-label>{{$t('bookingView.title')}}</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="restaurant">
                    <ion-icon name="restaurant"></ion-icon>
                    <ion-label>{{$t('searchView.title')}}</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-app>
</template>

<script>
    import RestaurantView from "./SearchView";

    import BookingView from "./BookingView";

    export default {
        name: "Tabs",
        components: {
            BookingView,
            RestaurantView
        }
    }
</script>

<style scoped>

</style>
