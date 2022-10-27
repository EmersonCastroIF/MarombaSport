const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    document.getElementById('TESTE').value = 'Meu Texto Novo'; 
    var ctx = document.getElementsByClassName("Mychart")
    var pesoDigitado = document.getElementById("Peso").value;
    var AlturaDigitada = document.getElementById("Altura").value;

    // if (ChartGraph) {
    //     ChartGraph.destroy(); 
    //     document.getElementById("graph").destroy();
    //   }

    // let chartStatus = Chart.getChart("myChart"); // <canvas> id
    // if (chartStatus != undefined) {
    //   chartStatus.destroy();
    // }
    // //-- End of chart destroy   
    
    // var ctx = $('#myChart'); //<canvas> id
     
 
       const 
        data = {
            labels: [
        'Red',
        'Blue',
        'Yellow'
      ],
          datasets: [{
            label: "IMC",
            data: [pesoDigitado,AlturaDigitada,5],
            backgroundColor: [
          'rgb(255, 99, 132)',
          'rgb(54, 162, 235)',
          'rgb(255, 205, 86)'
        ],
        hoverOffset: 4,
          }]
    
        };
        const config = {
            type: 'pie',
            data: data
        };

        var ctx = document.getElementById('graph').getContext('2d');
        if(ctx.pieChart){
            pieChart = null;
        }else{
            pieChart = new Chart(ctx, config);
        }
     

       
      console.log('teste');
      
      
})

    




   