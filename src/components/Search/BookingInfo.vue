<template>
    <ion-grid>
        <ion-row>
            <ion-col>
                <h1>{{$t('searchView.booking')}}</h1>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col col-6>
                <ion-item>
                    <ion-label position="floating">Date</ion-label>
                    <ion-datetime v-bind:value="new Date()" @ionChange="date = $event.target.value;"
                                  display-format="MMM D YYYY" :min="today"
                                  :max="maxDate"></ion-datetime>
                </ion-item>
            </ion-col>
            <ion-col col-6>
                <ion-item>
                    <ion-label position="floating">{{$t('searchView.people')}}</ion-label>
                    <ion-input value="1" @ionChange="peopleNumber=$event.target.value" type="number"></ion-input>
                </ion-item>
            </ion-col>
        </ion-row>
        <ion-row>
            <ion-col col-6>
                <ion-item>

                    <ion-label position="floating">{{$t('searchView.start')}}</ion-label>
                    <ion-datetime :value="startHour"
                                  @ionChange="updateStartHour($event)"
                                  display-format="HH:mm"></ion-datetime>
                </ion-item>
            </ion-col>
            <ion-col col-6>
                <ion-item>
                    <ion-label position="floating">{{$t('searchView.end')}}</ion-label>
                    <ion-datetime v-bind:value="toHour" @ionChange="toHour = $event.target.value"
                                  display-format="HH:mm"></ion-datetime>
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
                //    startHour : new Date().toISOString(),
                //    $_toHour : null,
                //    peopleNumber : 0,
            }
        },
        computed: {
            date: {
                get() {
                    return this.$store.getters.date
                },
                set(value) {
                    this.$store.dispatch('fetchDate', new Date(value))
                }
            },
            startHour: {
                get() {
                    return this.$store.getters.startHour
                },
                set(value) {
                    this.$store.dispatch('fetchStartHour', new Date(value));
                }
            },
            toHour: {
                get() {
                    return this.$store.getters.toHour
                },
                set(value) {
                    this.$store.dispatch('fetchToHour', new Date(value));
                }
            },
            peopleNumber: {
                get() {
                    return this.$store.getters.peopleNumber
                },
                set(value) {
                    this.$store.dispatch('fetchPeopleNumber', value)
                },
            },
            maxDate: {
                get() {
                    var max = new Date();
                    max.setMonth(max.getMonth() + 1);
                    return max.toISOString();
                }
            },
            // toHour: {
            //     get() {
            //         return this.$data.$_toHour;
            //     },
            //     set(value) {
            //         this.$data.$_toHour = value;
            //         this.$emit('input', value);
            //     }

            // }
        },
        methods: {
            updateToHour: function () {
                var sH = new Date(this.startHour);
                var tH = new Date(this.toHour);
                if (tH.getHours() < sH.getHours() + 1) {
                    tH.setHours(sH.getHours() + 1);
                    this.toHour = tH;
                }

            },
            updateStartHour(event) {
                this.startHour = event.target.value
                this.updateToHour(event);
            },
        },
        created() {

            /*var today = new Date();
            today.setHours(today.getHours() + 1)
            this.toHour = today;*/
            //this.updateStartHour();
            this.updateToHour();
        }
    }
</script>

<style scoped>

</style>
