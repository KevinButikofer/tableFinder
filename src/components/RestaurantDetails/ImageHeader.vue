<template>
    <ion-header translucent no-border>
        <ion-toolbar :style="headerStyle">
            <ion-buttons slot="start">
                 <ion-button v-if="this.$route.params.hideBook" @click="$router.push('/')" color="light">
                    <ion-icon slot="start" name="arrow-back"></ion-icon>
                </ion-button>
                <ion-button v-else @click="$router.push({name: 'restaurant'})" color="light">
                    <ion-icon slot="start" name="arrow-back"></ion-icon>
                </ion-button>
               
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
</template>

<script>
    export default {
        name: "ImageHeader",

        mounted() {
            console.log();
        },

        computed: {

            headerStyle() {
                return {
                    height: `200px`,
                    '--background': 'linear-gradient(rgba(0, 0, 0, 0.9), rgba(0, 0, 0, 0)), url(' + this.$store.getters.selectedRestaurant.image + ') no-repeat center/cover'
                };
            }
        }
    }
</script>

<style scoped>
</style>
