<template>
    <ion-app>
        <Header title="Booking"/>
        <ion-content>
            <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <booking-list :key="rerender" v-on:reload="reload()"/>
            <ion-footer>
                <ion-toolbar>
                    <ion-button @click="eraseCurrentHistory()" class="ion-margin" expand="block" color="danger">Erase History</ion-button>
                </ion-toolbar>
            </ion-footer>
        </ion-content>
    </ion-app>
</template>

<script>

    import Header from "../components/Header";
    import BookingList from "../components/Booking/BookingList";
    import {mapActions} from "vuex";

    export default {
        name: "BookingView",
        data(){
            return{
                ...mapActions(['eraseHistory']),
                rerender :0,
            }
        },
        methods:{
            eraseCurrentHistory(){
                this.eraseHistory()
            },
            reload(){
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
