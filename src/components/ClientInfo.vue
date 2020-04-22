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
                    <ion-label position="floating">Localisation</ion-label>
                    <ion-input  v-bind:style="{ color: activeColor}" v-bind:value="localisation" @ionChange="localisation=$event.target.value"></ion-input>
                </ion-item>
            </ion-col>
            <ion-col size="2">
                <ion-button style="margin-top: 15px;" color="light" @click="position">
                    <ion-icon name="locate"></ion-icon>
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
        {{localisation}}
    </form>

</template>

<script>
    import {FOODSTYLE} from "../datas/foodStyle";

    export default {
        name: "ClientInfo",
        data() {
            return {
                FOODSTYLE: FOODSTYLE,
                activeColor : 'black'
            }
        },
        methods: {
            position(){
                this.localisation = 'Position actuelle'
                this.activeColor= '#3880ff'
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
            }
        }
    }
</script>

<style scoped>
.textPos{

}

</style>
