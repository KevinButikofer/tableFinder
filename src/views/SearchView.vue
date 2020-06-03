<template>
    <ion-app>
        <Header v-show="!showResult" :title="$t('searchView.findTable')"/>
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
                <SearchInfo :key="rerender"/>
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
    import SearchInfo from "../components/Search/SearchInfo";
    import ResultList from "../components/SearchResult/ResultsList";
    import RestaurantInfo from "../components/SearchResult/SearchDetailsCard"


    export default {
        name: "RestaurantView",
        data(){
          return{
              rerender:0
          }
        },
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
            reload() {
                this.rerender += 1
            },
            doRefresh(event) {
                console.log('Begin async operation');

                setTimeout(() => {
                    this.reload()
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
