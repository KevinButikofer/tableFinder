<template>
    <form>
        <ion-row>
            <ion-col>
                <h2 float-left>Restaurants</h2>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-item>
                    <ion-label position="floating">Localisation</ion-label>
                    <ion-input v-bind:value="localisation" @ionChange="localisation=$event.target.value"></ion-input>
                </ion-item>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col>
                <ion-item>
                    <ion-label>Food Style</ion-label>
                    <ion-select interface="popover" @ionChange="foodStyle=$event.target.value">
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
        <h1>{{localisation}}</h1>
        <h1>{{foodStyle}}</h1>
    </form>

</template>

<script>
    import {FOODSTYLE} from "../datas/foodStyle";

    export default {
        name: "ClientInfo",
        data() {
            return {
                FOODSTYLE: FOODSTYLE
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

</style>
