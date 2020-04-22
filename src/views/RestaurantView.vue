<template>
    <ion-app>
        <Header title="Find a table"/>
        <ion-content>
            <ion-grid>

                <client-info/>

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
        components: {
            ClientInfo,
            Header, 
            BookingInfo
        }
    }
</script>

<style scoped>

</style>
