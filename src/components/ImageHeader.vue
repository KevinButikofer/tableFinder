<template>
    <ion-header translucent no-border>
        <ion-toolbar>
            <ion-buttons slot="start">
                <ion-button @click="$router.push({name: 'restaurant'})" color="light">
                    <ion-icon slot="start" name="arrow-back"></ion-icon>
                </ion-button>
            </ion-buttons>
            <ion-title>&nbsp;</ion-title>
        </ion-toolbar>
    </ion-header>
</template>

<script>
    export default {
        name: "ImageHeader",
    }
</script>

<style scoped>
    ion-toolbar {
        height: 200px;
        --background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(255, 255, 255, 0)), url(/images/italian.jpg) no-repeat center/cover;
    }
</style>
