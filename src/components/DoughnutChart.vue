<script>
  //Importing Line class from the vue-chartjs wrapper
  import { Doughnut } from 'vue-chartjs'
  //Exporting this so it can be used in other components
  export default { 
    extends: Doughnut,
    data () {
      return {
        datacollection: {
          labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 
                    'August', 'September', 'October', 'November', 'December'], //column name
          datasets: [
            {
              backgroundColor: ['rgba(0,0,0,0.5)','rgba(1,200,0,0.2)','rgba(0,1,200,1)','rgba(200,0,0,1)','rgba(0,200,0,1)','rgba(0,150,150,1)'],//each data's color
              borderColor: '#1234',
              label: 'Data One',
              pointBackgroundColor: 'white',
              borderWidth: 1,
              //Data to be represented on y-axis
              data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100] // input data
            }
          ]
        },
        //Chart.js options that controls the appearance of the chart
        options: {
          legend: {
            display: true
          },
          responsive: true,
          maintainAspectRatio: false,
          cutoutPercentage: 55 //도넛 inner circle
        }
      }
    },
    mounted () {
      //renderChart function renders the chart with the datacollection and options object.
      this.renderChart(this.datacollection, this.options)
    }
  }
</script>