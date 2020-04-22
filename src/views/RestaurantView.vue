<template>
    <ion-app>
        <Header title="Find a table"/>
        <ion-content>
            <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <ion-grid>

                <ClientInfo/>

            </ion-grid>
            <ion-grid>

                <booking-info/>

            </ion-grid>
        </ion-content>
    </ion-app>
</template>

<script>
    import ClientInfo from "../components/ClientInfo";
    import Header from "../components/Header";
    import BookingInfo from "../components/BookingInfo";

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
            ClientInfo,
            Header,
            BookingInfo
        }
    }
</script>

<style scoped>

</style>
