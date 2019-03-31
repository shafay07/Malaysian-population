$(document).ready(function () {
    console.log("ready!");
    graph1();
    graph2();
});
//draw function for first graph
function graph1() {
    var data_set;
    var date = []; //years
    var population = []; //population numbers
    var yearly_rate = [] //yearly growth rate

    //loading csv file using d3 csv parser
    d3.csv("population.csv").then(function (data) {
        data_set = data;
        //preprocess the data, convert into single array
        for (i = 0; i < data_set.length; i++) {
            date.push(data_set[i].Date);
            population.push(data_set[i].MalaysiaPopulation);
            yearly_rate.push(data_set[i].YearlyGRate);
        }
        //draw the graph
        //line graph
        var trace = {
            x: date,
            y: population,
            text: yearly_rate,
            type: 'line'
        }
        //bar graph
        var trace2 = {
            x: date,
            y: population,
            text: yearly_rate,
            type: 'bar'
        }
        //data array for 2 different graphs
        var data = [trace, trace2];
        //layout controls the graph attributes
        var layout = {
            autosize: true,
            title: 'Population over the years',
            titlefont: { size:30 },
            xaxis: {
                autotick: false,
                ticks: 'outside',
                title: 'Year',
                titlefont: { size:20 },
                tickwidth: 4,
                tickcolor: '#000'
            },
            yaxis: {
                title: 'Population',
                titlefont: { size:20 },
                tickcolor: '#000'
            }
        };
        //draw the graph using plotly
        Plotly.newPlot('graph', data, layout);
    });
}
//draw function for second graph
function graph2(){
    

}