    // The canvas reference ID to display the chart
    const chartCanvas4 = document.querySelector('#line-chart')
    
       // Create a new chart instance
       const newLineChart4 = new Chart(chartCanvas4, {
                
          // Chart configuration
          type: 'line', // chart type
          data: {
             // Sample five data labels on the horizontal axis
             labels: ['ReactJS', 'jQuery', 'Express', 'Angular', 'Vue'],
                // Sample five chart datasets
                datasets: [
                {
                //label: 'My First Chart', // Chart label
                // Five data points (no % or currency symbols )
                data: [40.14, 34.42,23.82,22.96, 19.87], 
                            
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