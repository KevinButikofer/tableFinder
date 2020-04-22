<template>
    <ion-list>
        <ion-item
            v-for="(item, index) in RESTAURANTS"
            :key="index"
            :value="item">
            <ion-thumbnail slot="start">
                <img :src="item.image">
            </ion-thumbnail>
            <ion-label>
                <h2>{{item.name}}</h2>
                <h3>{{item.address}}, {{item.city}}</h3>
                <p>{{item.rating}}</p>
            </ion-label>
        </ion-item>



    </ion-list>
</template>

<script>
    import {RESTAURANTS} from "../datas/restaurants";

    export default {
        name: "ResultList",
        data() {
            return {
                RESTAURANTS: RESTAURANTS
            }
        },
        computed: {

        }
    }
</script>

<style scoped>

</style>
