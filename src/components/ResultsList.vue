<template>
    <ion-list>
        <ion-item
                v-for="(item, index) in filteredRestaurant"
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
        computed: {            
            filteredRestaurant :
            {
                get(){
                    if(this.$store.getters.localisation == "")
                    {
                        return RESTAURANTS
                    }
                    var filteredRestaurant = [];
                   RESTAURANTS.forEach((rest) => {
                            // if(rest.place > this.$store.state.peopleNumber 
                            // && rest.location == this.$store.state.location
                            //  && rest.foodStyle == this.$store.state.foodStyle)
                            // console.log(rest.city);
                            // console.log(this.$store.getters.localisation);
                            if(rest.city == this.$store.getters.localisation) // && ((typeof(this.$store.state.foodStyle) != "undefined" & rest.foodStyle in this.$store.state.foodStyle) || this.$store.state.foodStyle.length < 1))
                            {
                                filteredRestaurant.push(rest);
                            }
                       }
                   );                   
                    return filteredRestaurant;
                }
            }
        },
    }
</script>

<style scoped>
</style>
