<template>
    <ion-app>
        <Header title="Find a table"/>
        <ion-content>
            <ion-grid>

                <ClientInfo/>

            </ion-grid>
        </ion-content>
    </ion-app>
</template>

<script>
    import ClientInfo from "../components/ClientInfo";
    import Header from "../components/Header";

    export default {
        name: "RestaurantView",
        components: {
            ClientInfo,
            Header
        }
    }
</script>

<style scoped>

</style>
