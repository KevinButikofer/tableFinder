<template>
    <ion-app>
        <Header title="Booking"/>
        <ion-content>
            <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <booking-list :key="rerender" v-on:reload="test()"/>
        </ion-content>
    </ion-app>
</template>

<script>

    import Header from "../components/Header";
    import BookingList from "../components/Booking/BookingList";

    export default {
        name: "BookingView",
        data(){
            return{
                rerender :0,
            }
        },
        methods:{
            test(){
                console.log(12)
                this.rerender +=1
            },
            doRefresh(event) {

                setTimeout(() => {
                   this.rerender +=1
                    event.target.complete()
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
