<template>
    <ion-card>
      <ion-card-header>
        <ion-card-title>Occupancy per hour</ion-card-title>
      </ion-card-header>
      <ion-card-content>
        <GChart
          type="ColumnChart"
          :data="chartData"
          :options="chartOptions"/>
      </ion-card-content>
    </ion-card>
</template>

<script>

  import { GChart } from 'vue-google-charts'

  export default {
      name: "BookingInfoCard",

      components: {
          GChart
      },

      mounted(){
          window.dispatchEvent(new Event('resize'));
      },

      data () {
          return {
              // Array will be automatically processed with visualization.arrayToDataTable function
              chartData: [
                  ['Hour', 'Occupation',{ role: 'style' }],
                  ['7h' , 80, 'RoyalBlue'],
                  ['8h' , 70, 'RoyalBlue'],
                  ['9h' , 30, 'RoyalBlue'],
                  ['10h', 40, 'RoyalBlue'],
                  ['11h', 30, 'RoyalBlue'],
                  ['12h', 80, 'RoyalBlue'],
                  ['13h', 100, 'RoyalBlue'],
                  ['14h', 90, 'Tomato'],
                  ['15h', 40, 'RoyalBlue'],
                  ['16h', 20, 'RoyalBlue'],
                  ['17h', 30, 'RoyalBlue'],
                  ['18h', 30, 'RoyalBlue'],
                  ['19h', 40, 'RoyalBlue'],
                  ['20h', 100, 'RoyalBlue'],
                  ['21h', 100, 'RoyalBlue'],
                  ['22h', 90, 'RoyalBlue'],
                  ['23h', 50, 'RoyalBlue'],
              ],
              chartOptions: {
                  height: 150,
                  legend: { position: 'none' },
                  chartArea:{ left: "5%" , top:"5%", width:"90%", height:"90%"},
                  vAxis: { textPosition: 'none' , gridlines: { count: 4 } },
                  hAxis: { textPosition: 'none'},
              }
          }
      }
  }
</script>

<style scoped>
ion-card {
text-align:left;
}
</style>
