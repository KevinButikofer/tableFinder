<template>
<ion-grid>
    <ion-row><ion-col>
        <ClientInfo/>
        </ion-col>
    </ion-row>
    <ion-row>    
        <BookingInfo/>
    </ion-row>    
    <ion-row>      
        <ion-col> 
            <ion-button expand="full" @click="$router.push({name: 'about'})">Search</ion-button>
        </ion-col>
    </ion-row>
</ion-grid>

</template>

<script>
    import {RESTAURANTS} from "../datas/restaurants";
    import ClientInfo from "../components/ClientInfo";
    import BookingInfo from "../components/BookingInfo";

    export default {
        name: "SearchInfo",
         computed: {            
            filteredRestaurant :
            {
                get(){
                    var filteredRestaurant = [];
                   RESTAURANTS.forEach((rest) => {
                            // if(rest.place > this.$store.state.peopleNumber 
                            // && rest.location == this.$store.state.location
                            // && rest.foodStyle == this.$store.state.foodStyle)
                            if(rest.city == this.$store.getters.localisation && (rest.foodStyle in this.$store.state.foodStyle|| this.$store.state.foodStyle.length < 1))
                            {
                                filteredRestaurant.push(rest);
                            }
                       }
                   );                   
                    return filteredRestaurant;
                }
            }
        },
        methods: {
        log: function () {
            console.log("Restaurant");
            console.log(this.filteredRestaurant);      
        }
        },
         components: {
            ClientInfo,
            BookingInfo
        }
    }
</script>

<style scoped>

</style>
