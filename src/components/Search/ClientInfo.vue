<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <h1>Restaurants</h1>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col size="10">
                <ion-item>
                    <ion-label position="floating">{{$t('searchView.location')}}</ion-label>
                    <ion-input autocomplete="on" v-bind:style="{ color: activeColor}" v-bind:value="localisation"
                               @ionChange="localisation=$event.target.value" @click="clearLocalisation"></ion-input>
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
                    <ion-label>{{$t('searchView.foodStyle')}}</ion-label>
                    <ion-select :ok-text="$t('button.ok')" :cancel-text="$t('button.cancel')" multiple="true"
                                id="select" @ionChange="foodStyle=$event.target.value">
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
    </ion-grid>
</template>

<script>
    import {FOODSTYLE} from "../../datas/foodStyle";
    import {mapGetters, mapActions} from 'vuex'
    import axios from "axios";

    export default {
        name: "ClientInfo",
        data() {
            return {
                FOODSTYLE: FOODSTYLE,
                activeColor: 'black',
                linkGps: ['/images/icons/gpsOK.svg', '/images/icons/gpsNOK.svg'],
            }
        }, mounted() {
            this.clearLocalisation()
        },
        methods: {
            ...mapActions(['fetchLatitude', 'fetchLongitude', 'fetchIsGpsOk']),
            async getLocation() {
                try {
                    let url = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${this.latitude}&longitude=${this.longitude}&localityLanguage=${this.$i18n.locale}`
                    let response = await axios.get(url)
                    this.localisation = response.data.locality
                } catch {
                    this.activeColor = '#FF9494'
                    this.localisation = 'Error'
                    this.fetchIsGpsOk(false)
                }

            },
            clearLocalisation() {
                this.activeColor = '#000000'
                this.localisation = ""
                this.fetchIsGpsOk(false)
            },
            position() {
                navigator.geolocation.getCurrentPosition(pos => {
                    this.activeColor = '#000000'
                    this.fetchLatitude(pos.coords.latitude)
                    this.fetchLongitude(pos.coords.longitude)
                    this.fetchIsGpsOk(true)
                    this.getLocation()
                }, err => {
                    console.log(err)
                    this.activeColor = '#FF9494'
                    this.localisation = 'Error'
                    this.fetchIsGpsOk(false)
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
            ...mapGetters(['latitude', 'longitude', 'isGpsOk']),
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
