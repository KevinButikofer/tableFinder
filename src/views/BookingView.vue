<template>
    <ion-app>
        <Header title="Booking"/>
        <ion-content>
            <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <booking-list/>
        </ion-content>
    </ion-app>
</template>

<script>

    import Header from "../components/Header";
    import BookingList from "../components/Booking/BookingList";

    export default {
        name: "About",
        methods:{
            doRefresh(event) {
                console.log('Begin async operation');

                setTimeout(() => {
                    console.log('Async operation has ended');
                    event.target.complete();
                }, 2000);

            },
        },
        components: {
            BookingList,
            Header,

        }
    }
</script>

<style scoped>

</style>
