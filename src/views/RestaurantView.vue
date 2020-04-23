<template>
    <ion-app>
        <Header title="Find a table"/>
        <ion-content>
            <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <ion-grid>
                <SearchInfo/>

            </ion-grid>
        </ion-content>
    </ion-app>
</template>

<script>
    // import ClientInfo from "../components/ClientInfo";
    import Header from "../components/Header";
    // import BookingInfo from "../components/BookingInfo";
    import SearchInfo from "../components/SearchInfo";

    export default {
        name: "RestaurantView",
        methods: {
            doRefresh(event) {
                console.log('Begin async operation');

                setTimeout(() => {
                    console.log('Async operation has ended');
                    event.target.complete();
                }, 2000);

            }
        },
        components: {
            Header,
            SearchInfo
        }
    }
</script>

<style scoped>

</style>
