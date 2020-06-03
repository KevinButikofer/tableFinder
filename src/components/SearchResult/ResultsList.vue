<template>
    <ion-list>
        <ion-item-sliding v-for="(item, index) in filteredRestaurant"
                          :key="index"
                          :value="item">


            <ion-item @click="showRestaurant(item)">
                <ion-thumbnail slot="start">
                    <img :src="item.image">
                </ion-thumbnail>
                <!-- <ion-badge v-if="item.place > 0" color="success" slot="end">{{item.place}}</ion-badge>
                <ion-badge v-else color="danger" slot="end">{{item.place}}</ion-badge>-->
                <ion-label>
                    <h2>{{item.name}}</h2>
                    <h3>{{item.address}}, {{item.city}}</h3>
                    <p>
                        <ion-icon v-for="(n,index) in item.rating" :key="index" name="star"></ion-icon>
                        <ion-icon v-for="(x,index1) in (MAXNOTE-item.rating)" :key="index1+MAXNOTE" name="star-outline">

                        </ion-icon>

                    </p>
                </ion-label>
            </ion-item>
        </ion-item-sliding>
    </ion-list>

</template>

<script>
    import {RESTAURANTS} from "../../datas/restaurants";
    import {MAXNOTE} from "../../datas/notes"


    export default {
        name: "ResultList",
        data() {
            return {
                RESTAURANTS: RESTAURANTS,
                MAXNOTE: MAXNOTE
            }
        },
        computed: {
            filteredRestaurant :
            {
                get(){
                    /*if(this.$store.getters.localisation == "")
                    {
                        return RESTAURANTS
                    }*/
                    var filteredRestaurant = [];
                   RESTAURANTS.forEach((rest) => {
                            // if(rest.place > this.$store.state.peopleNumber
                            // && rest.location == this.$store.state.location
                            //  && rest.foodStyle == this.$store.state.foodStyle)
                            // console.log(rest.city);
                            // console.log(this.$store.getters.localisation);
                            //console.log(rest.foodStyle)
                            //console.log(this.$store.state.foodStyle)

                            if(rest.city.toLowerCase().includes(this.$store.getters.localisation.toLowerCase())
                            && ((typeof(this.$store.getters.foodStyle) != "undefined" &  this.$store.getters.foodStyle.includes(rest.style)) || this.$store.getters.foodStyle.length < 1)
                            && rest.place > this.$store.getters.peopleNumber)
                            {
                                filteredRestaurant.push(rest);
                            }
                   }
                        );
                        return filteredRestaurant;
                    }

            }
        },
        methods:
            {
                showRestaurant: function (rest) {
                    this.$store.dispatch("fetchSelectedRestaurant", rest);
                    this.$router.push({name: 'RestaurantInfo', params: {book: true}})
                }
            }
    }

</script>

<style scoped>
</style>
