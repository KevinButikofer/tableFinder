<template>
    <ion-app>
        <Header v-show="!showResult" title="Find a table"/>
        <ion-header v-show="showResult">
            <ion-toolbar color="primary">
                <ion-buttons slot="start">
                    <ion-button @click="showResult = false">
                        <ion-icon slot="start" name="arrow-back"></ion-icon>
                    </ion-button>

                </ion-buttons>
            </ion-toolbar>
        </ion-header>

        <ion-content>
            <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <ion-grid v-show="!showResult">
                <SearchInfo/>
            </ion-grid>
            <ion-grid v-show="showResult">
                <RestaurantInfo/>
                <ResultList/>
            </ion-grid>
        </ion-content>
    </ion-app>
</template>

<script>
    // import ClientInfo from "../components/ClientInfo";
    import Header from "../components/Header";
    // import BookingInfo from "../components/BookingInfo";
    import SearchInfo from "../components/SearchInfo";
    import ResultList from "../components/ResultsList";
    import RestaurantInfo from "../components/RestaurantInfo"


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
            SearchInfo,
            ResultList,
            RestaurantInfo
        }
    }
</script>

<style scoped>

</style>
