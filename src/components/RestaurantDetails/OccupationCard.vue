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
  import {OCCUPANCY} from '../../datas/occupancy'

  export default {
      name: "BookingInfoCard",

      components: {
          GChart
      },

      computed :
          {
              startHour: {
                  get() {
                      return this.$store.getters.startHour
                  },
              },
              toHour: {
                  get() {
                      return this.$store.getters.toHour
                  },
              },
          },

      mounted(){
          window.dispatchEvent(new Event('resize'))

          let start = this.startHour.getHours()
          let end = this.toHour.getHours()

          for (const x of Array(OCCUPANCY.length - 1).keys()) {
              let h = x + 7;
              if(h >= start && h <= end){
                  this.chartData[x+1][2] = "Tomato"
              }

          }


      },

      data () {
          return {
              // Array will be automatically processed with visualization.arrayToDataTable function
              chartData: OCCUPANCY,
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
