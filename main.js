$(document).ready(function () {
    console.log("JS Ready!");
    graph1();
    graph2();
});
//variables holding each column of csv
var yearlydata; //to store csv object
var year = [];
var population = [];
var yearlychangeper = [];
var yearlychange = [];
var migrants = [];
var medianage =[];
var fertilityrate =[];
var density = [];
var urbanpoppercent = [];
var urbanpop = [];
var countryshare = [];
var worldpop = [];
var myglobalrank = [];

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
//selection that user wants to draw
//return coresponding column to selection
function selecttocolumn(selection){
    if(selection == "Year"){
        return year;
    }
    if(selection == "Population"){
        return population;
    }
    if(selection == "YearlyChangePercent"){
        return yearlychangeper;
    }
    if(selection == "YearlyChange"){
        return yearlychange;
    }
    if(selection == "Migrants"){
        return migrants;
    }
    if(selection == "MedianAge"){
        return medianage;
    }
    if(selection == "FertilityRate"){
        return fertilityrate;
    }
    if(selection == "Density"){
        return density;
    }
    if(selection == "UrbanPopPercent"){
        return urbanpoppercent;
    }
    if(selection == "UrbanPopulation"){
        return urbanpop;
    }
    if(selection == "CountryShareofWorldPop"){
        return countryshare;
    }
    if(selection == "WorldPopulation"){
        return worldpop;
    }
    if(selection == "MalaysiaGlobalRank"){
        return myglobalrank;
    }


}
function selection(){
    var selx = document.getElementById('selectx');
    var sely = document.getElementById('selecty');
    // display value property of select list (from selected option)
    console.log( selx.value , sely.value );
    var trace3 = {
        x: selecttocolumn(selx.value),
        y: selecttocolumn(sely.value),
        line: 
        {
            color: 'rgb(128, 0, 128)',
            width: 2
        },
        type: 'line bar'
    };
    var layout = {
        autosize: true,
        title: selx.value+' vs '+sely.value,
        titlefont: { size:30 },
        xaxis: {
            title: selx.value,
            titlefont: { size:20 },
            tickwidth: 4,
            tickcolor: '#000'
        },
        yaxis: {
            title: sely.value,
            titlefont: { size:20 },
            tickcolor: '#000'
        }
    };
    var data1 = [trace3];
    Plotly.newPlot('graph1', data1, layout);

}
//draw function for second graph
function graph2(){
    //loading csv file using d3 csv parser
    d3.csv("yearlydata.csv").then(function (data) {
        yearlydata = data;
        //pre process data to convert array of object into single array 
        for (i = 0; i < yearlydata.length; i++) {
            year.push(yearlydata[i].Year);
            population.push(yearlydata[i].Population);
            yearlychangeper.push(yearlydata[i].YearlyChangePercent);
            yearlychange.push(yearlydata[i].YearlyChange);
            migrants.push(yearlydata[i].Migrants);
            medianage.push(yearlydata[i].MedianAge);
            fertilityrate.push(yearlydata[i].FertilityRate);
            density.push(yearlydata[i].Density);
            urbanpoppercent.push(yearlydata[i].UrbanPopPercent);
            urbanpop.push(yearlydata[i].UrbanPopulation);
            countryshare.push(yearlydata[i].CountryShareofWorldPop);
            worldpop.push(yearlydata[i].WorldPopulation);
            myglobalrank.push(yearlydata[i].MalaysiaGlobalRank);
        }
        console.log('Data processed!');

    });
    
}