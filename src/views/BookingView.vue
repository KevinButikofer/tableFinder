<template>
    <ion-app>
        <Header :title="$t('bookingView.title')"/>
        <ion-content v-if="connected">
            <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <booking-list :key="rerender" v-on:reload="reload()"/>
            <ion-footer>
                <ion-toolbar>
                    <ion-button @click="eraseCurrentHistory()" class="ion-margin" expand="block" color="danger">
                        {{$t('bookingView.eraseHistory')}}
                    </ion-button>
                </ion-toolbar>
            </ion-footer>
        </ion-content>
        <ion-content v-else>
            <ion-grid style="height: 100%">
                <ion-row justify-content-center align-items-center style="height: 100%">
                    {{$t('bookingView.error')}}
                </ion-row>
            </ion-grid>
        </ion-content>
    </ion-app>
</template>

<script>

    import Header from "../components/Header";
    import BookingList from "../components/Booking/BookingList";
    import {mapActions, mapGetters} from "vuex";

    export default {
        name: "BookingView",
        data() {
            return {
                ...mapActions(['eraseHistory']),
                rerender: 0,
            }
        },
        methods: {
            eraseCurrentHistory() {
                return this.$ionic.alertController
                    .create({
                        header: this.$t('modalHistory.header'),
                        message: this.$t('modalHistory.message'),
                        buttons: [{
                            text: this.$t('modalHistory.yes'),
                            handler: () => {
                                this.eraseHistory()
                            }
                        }, {
                            text: this.$t('modalHistory.no'),
                            role: 'cancel',
                        }],
                    })
                    .then(a => a.present())

            },
            reload() {
                this.rerender += 1
            },
            doRefresh(event) {

                setTimeout(() => {
                    this.rerender += 1
                    event.target.complete()
                }, 2000);

            },
        },
        computed: {
            ...mapGetters(['connected']),
        },
        components: {
            BookingList,
            Header,

        }
    }
</script>

<style scoped>

</style>
