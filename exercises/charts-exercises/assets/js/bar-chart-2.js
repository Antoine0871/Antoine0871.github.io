    // The canvas reference ID to display the chart
    const chartCanvas2 = document.querySelector('#bar-chart-2')
    
       // Create a new chart instance
       const newLineChart2 = new Chart(chartCanvas2, {
                
          // Chart configuration
          type: 'bar', // chart type
          data: {
             // Sample five data labels on the horizontal axis
             labels: ['MySQL', 'PostgreSQL', 'SQLite', 'MongoDB', 'MS SQL Server'],
                // Sample five chart datasets
                datasets: [
                {
                //label: 'My First Chart', // Chart label
                // Five data points (no % or currency symbols )
                data: [50.15, 40.42,32.18,27.70, 26.87], 
                            
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
                min : 20,
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