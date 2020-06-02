<template>
    <ion-grid>
        <ion-row>
            <ClientInfo/>
        </ion-row>
        <ion-row>
            <BookingInfo/>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-button expand="full" @click="showResult()">{{$t('searchView.search')}}</ion-button>
            </ion-col>
        </ion-row>
    </ion-grid>
</template>

<script>
    import ClientInfo from "./ClientInfo";
    import BookingInfo from "./BookingInfo";

    export default {
        name: "SearchInfo",
        methods: {
            log: function () {
                console.log("Restaurant");
                console.log(this.filteredRestaurant);
            },
            showResult: function () {
                this.$store.dispatch('fetchShowResult', true);
            }
        },
        components: {
            ClientInfo,
            BookingInfo
        }
    }
</script>

<style scoped>

</style>
