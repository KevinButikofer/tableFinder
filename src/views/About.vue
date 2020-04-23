<template>
    <ion-app>
        <Header title="Results"/>
        <ion-content>
            <ion-refresher slot="fixed" @ionRefresh="doRefresh($event)">
                <ion-refresher-content></ion-refresher-content>
            </ion-refresher>
            <RestaurantInfo/>
            <ResultsList/>

        </ion-content>
    </ion-app>
</template>

<script>
    import ResultsList from "../components/ResultsList";
    import Header from "../components/Header";
    import RestaurantInfo from "../components/RestaurantInfo";

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
            ResultsList,
            Header,
            RestaurantInfo,
        }
    }
</script>

<style scoped>

</style>
