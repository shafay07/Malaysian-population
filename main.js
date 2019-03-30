$( document ).ready(function() {
    console.log( "ready!" );
    draw_graph();
});

function draw_graph(){
    var data_set;
    var date = [];
    var population = [];
    //loading csv file
    d3.csv("population.csv").then(function(data) {
        data_set = data;
        //preprocess the data
        for(i=0;i<data_set.length;i++)
        {
            date.push(data_set[i].Date);
            population.push(data_set[i].MalaysiaPopulation);
        }
        //draw the graph
        var data = [
            {
              x: date,
              y: population,
              type: 'bar'
            }
        ];
        Plotly.newPlot('graph', data);
    });
    


    
    
   

}
