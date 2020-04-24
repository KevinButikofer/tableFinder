<template>
    <ion-app>
        <Header v-show="!showResult" title="Find a table"/>

        <ion-content>
            <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <ion-grid>
                <ion-vue-router name="search"></ion-vue-router>
            </ion-grid>
        </ion-content>
    </ion-app>
</template>

<script>
    // import ClientInfo from "../components/ClientInfo";
    import Header from "../components/Header";
    // import BookingInfo from "../components/BookingInfo";



    export default {
        name: "RestaurantView",
        computed:
            {
                showResult: {
                    get() {
                        return this.$store.getters.showResult
                    },
                    set(value) {
                        this.$store.dispatch('fetchShowResult', value);
                    }
                }
            },
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
        }
    }
</script>

<style scoped>

</style>
