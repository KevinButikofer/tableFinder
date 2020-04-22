<template>
    <ion-app>
        <Header title="Results"/>
        <ion-content>
            <ResultsList/>
        </ion-content>
    </ion-app>
</template>

<script>
    import ResultsList from "../components/ResultsList";
    import Header from "../components/Header";

    export default {
        name: "About",
        components: {
            ResultsList,
            Header
        }
    }
</script>

<style scoped>

</style>
