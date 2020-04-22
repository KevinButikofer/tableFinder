<template>
    <ion-header>
        <ion-toolbar color="primary">
            <ion-buttons slot="start">
                <ion-back-button></ion-back-button>
            </ion-buttons>
            <ion-title>{{title}}</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script>
    export default {
        name: "Header",
        props:['title']
    }
</script>

<style scoped>

</style>
