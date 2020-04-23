<template>
    <form>
        <ion-row>
            <ion-col>
                <h2 float-left>Restaurants</h2>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="10">
                <ion-item>
                    <ion-label position="floating">Location</ion-label>
                    <ion-input v-bind:style="{ color: activeColor}" v-bind:value="localisation"
                               @ionChange="localisation=$event.target.value"></ion-input>
                </ion-item>
            </ion-col>
            <ion-col size="2">
                <ion-button style="margin-top: 15px;" color="light" @click="position">
                    <img :src="isGpsOk ? linkGps[0]:linkGps[1]" style="width : 100% ; height : 100%" alt="gpsOK">
                </ion-button>

            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-item>
                    <ion-label>Food Style</ion-label>
                    <ion-select multiple="true" id="select" @ionChange="foodStyle=$event.target.value">
                        <ion-select-option
                                v-for="(item, index) in FOODSTYLE"
                                :key="index"
                                :value="item"
                        >{{ item }}
                        </ion-select-option>
                    </ion-select>
                </ion-item>
            </ion-col>
        </ion-row>
    </form>

</template>

<script>
    import {FOODSTYLE} from "../datas/foodStyle";
    import {mapGetters, mapActions} from 'vuex'

    export default {
        name: "ClientInfo",
        data() {
            return {
                FOODSTYLE: FOODSTYLE,
                activeColor: 'black',
                linkGps:['/images/icons/gpsOK.svg','/images/icons/gpsNOK.svg'],
            }
        },
        methods: {
            ...mapActions(['fetchLatitude','fetchLongitude','fetchIsGpsOk']),
            position() {
                navigator.geolocation.getCurrentPosition(pos => {
                    this.localisation = 'Current Location'
                    this.activeColor = '#3880ff'
                    this.fetchLatitude(pos.coords.latitude)
                    this.fetchLongitude(pos.coords.longitude)
                    this.fetchIsGpsOk(true)
                }, err => {
                    console.log(err)
                    this.localisation = 'Erreur'
                })

            },
            showModal() {
                this.$ionic.loadingController.create({
                    duration: 5000,
                    message: 'Please wait...',
                    translucent: true,
                    cssClass: 'custom-class custom-loading'
                }).then(a => {
                    a.present()

                });
            }
        },
        computed: {
            ...mapGetters(['latitude','longitude','isGpsOk']),
            localisation: {
                get() {
                    return this.$store.getters.localisation
                },
                set(value) {
                    this.$store.dispatch('fetchLocalisation', value)
                }
            },
            foodStyle: {
                get() {
                    return this.$store.getters.foodStyle
                },
                set(value) {
                    this.$store.dispatch('fetchFoodStyle', value)
                }
            },
        }
    }
</script>

<style scoped>
    .textPos {

    }

</style>
