    // The canvas reference ID to display the chart
    const chartCanvas5 = document.querySelector('#pie-chart')
    
       // Create a new chart instance
       const newLineChart5 = new Chart(chartCanvas5, {
                
          // Chart configuration
          type: 'pie', // chart type
          data: {
             // Sample five data labels on the horizontal axis
             labels: ['Git', 'Docker', 'Yarn', 'Kubernetes', 'Unity 3D'],
                // Sample five chart datasets
                datasets: [
                {
                //label: 'My First Chart', // Chart label
                // Five data points (no % or currency symbols )
                data: [93.42, 48.85,17.73,16.8, 9.38], 
                            
                // Chart data background colors
                backgroundColor: ['orange', 'blue', 'brown', 'purple', 'indigo'],
                },
              ],
            },
           // Canvas not responsive by default
           options: {
            responsive: true,
            maintainAspectRatio:false,
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