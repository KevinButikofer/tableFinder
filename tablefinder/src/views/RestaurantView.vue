<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <h1>Restaurants View</h1>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <Restaurant/>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script>
    import Restaurant from "../components/Restaurants";
    export default {
        name: "RestaurantView",
        components:{
            Restaurant
        }
    }
</script>

<style scoped>

</style>
