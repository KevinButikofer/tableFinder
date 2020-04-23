<template>
    <ion-list>
        <ion-item
                v-for="(item, index) in RESTAURANTS"
                :key="index"
                :value="item">
            <ion-thumbnail slot="start">
                <img :src="item.image">
            </ion-thumbnail>
            <ion-badge v-if="item.place > 0" color="success" slot="end">{{item.place}}</ion-badge>
            <ion-badge v-else color="danger" slot="end">{{item.place}}</ion-badge>
            <ion-label>
                <h2>{{item.name}}</h2>
                <h3>{{item.address}}, {{item.city}}</h3>
                <p>
                    <ion-icon v-for="(n,index) in item.rating" :key="index" name="star">{{n}}</ion-icon>
                    <ion-icon v-for="(x,index1) in (MAXNOTE-item.rating)" :key="index1+MAXNOTE" name="star-outline">{{x}}
                    </ion-icon>

                </p>
            </ion-label>
        </ion-item>
    </ion-list>

</template>

<script>
    import {RESTAURANTS} from "../datas/restaurants";
    import {MAXNOTE} from "../datas/notes"

    export default {
        name: "ResultList",
        data() {
            return {
                RESTAURANTS: RESTAURANTS,
                MAXNOTE: MAXNOTE
            }
        },
        computed: {}
    }
</script>

<style scoped>

</style>
