<template>
<ion-grid>
    <ion-row>
        <h2>Booking</h2>
    </ion-row>
        <ion-row>
            <ion-col col-6>
                <ion-item>
                        <ion-label position="floating">Date</ion-label>
                    <ion-datetime display-format="D MMM YYYY" :min="today" :max="maxDate"></ion-datetime>
                </ion-item>
          </ion-col>
            <ion-col col-6>
                <ion-item>
                    <ion-label position="floating">People</ion-label>
                    <ion-input type="number"></ion-input>
                </ion-item>
            </ion-col>
          </ion-row>
          <ion-row>
            <ion-col col-6>
                <ion-item>

                    <ion-label position="floating">Start</ion-label>
                    <ion-datetime v-bind:value="startHour" @ionChange="startHour = $event.target.value; updateToHour($event);" display-format="HH:mm"></ion-datetime>
                </ion-item>
            </ion-col>
            <ion-col col-6>
                <ion-item>
                    <ion-label position="floating">To</ion-label>
                 <ion-datetime v-bind:value="toHour" @ionChange="toHour = $event.target.value" display-format="HH:mm" ></ion-datetime>
                </ion-item>
            </ion-col>
          </ion-row>
</ion-grid>

</template>

<script>

    export default {
        name: "BookingInfo",
        data() {
            return {
               today: new Date().toISOString(),
               startHour : new Date().toISOString(),
            }
        },
         computed: {
            maxDate: {
                get() {
                    var max = new Date();
                    max.setMonth(max.getMonth()+1);
                    return max.toISOString();
                }
            },
            toHour: {
                get() {
                    if (typeof this.value === 'undefined')
                    {
                        return new Date();
                    }
                        return this.value;
                },
                set(value) {
                    this.value = value;
                }

            },
        },
         methods: {
        updateToHour: function () {

            var sH = new Date(this.startHour);
            var tH = new Date(this.toHour);
            console.log("sh "+sH.getHours());
            console.log("th "+tH.getHours());
            if(tH.getHours() < sH.getHours()+1)
            {
                tH.setHours(sH.getHours()+3);
                console.log("th after "+tH.getHours());
                console.log("toHour "+ tH.toISOString());
                this.toHour = tH.toISOString();
                console.log("toHour "+ tH.toISOString());
            }
        }
    }
    }
</script>

<style scoped>

</style>
