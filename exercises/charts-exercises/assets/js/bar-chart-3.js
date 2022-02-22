    // The canvas reference ID to display the chart
    const chartCanvas3 = document.querySelector('#bar-chart-3')
    
       // Create a new chart instance
       const newLineChart3 = new Chart(chartCanvas3, {
                
          // Chart configuration
          type: 'bar', // chart type
          data: {
             // Sample five data labels on the horizontal axis
             labels: ['AWS', 'Google Cloud', 'MS Azure', 'Heroku', 'DigitalOcean'],
                // Sample five chart datasets
                datasets: [
                {
                //label: 'My First Chart', // Chart label
                // Five data points (no % or currency symbols )
                data: [59.22, 31.05,30.77,24, 17.67], 
                            
                // Chart data background colors
                backgroundColor: ['orange']
                },
              ],
            },
           // Canvas not responsive by default
           options: {
            responsive: true,
            plugins:{
              legend:{
                display:false
              }
            },
         scales:{
           x:{
             ticks:{
               color:'white',
               font:{size:13}
             },
           },
           y:{
             grid:{
               display:false
             },
             ticks:{
               color:'white',
               font:{size:16},
               callback:function(value){
                   return value + '%';
               },
             }
           }
         }
       },
    });