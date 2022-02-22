    // The canvas reference ID to display the chart
    const chartCanvas1 = document.querySelector('#bar-chart-1')
    
       // Create a new chart instance
       const newLineChart1 = new Chart(chartCanvas1, {
                
          // Chart configuration
          type: 'bar', // chart type
          data: {
             // Sample five data labels on the horizontal axis
             labels: ['JavaScript', 'HTML/CSS', 'Python', 'SQL', 'Java'],
                // Sample five chart datasets
                datasets: [
                {
                label: 'My First Chart', // Chart label
                // Five data points (no % or currency symbols )
                data: [68.98, 56.07,48.20,47.08, 35.35], 
                            
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
                  font:{size:16}
                },
              },
              y:{
                grid:{
                  display:false
                },
                min : 30,
                ticks:{
                  color:'white',
                  font:{size:16},
                  callback:function(value){
                      return value + '%';}
                }
              }
            }
            
          },
       });