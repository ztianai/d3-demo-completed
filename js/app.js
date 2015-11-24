'use strict';

//Create a data
 var data = [1,2,3,4,5]

//Using d3.js to create some graphics
//Select circle to bind data
var myChart = d3.select('#chart')
var circle = myChart.selectAll('circle').data(data)
	.enter()
	.append('circle')       //Append an element

    //Assign attribute
    .attr('r', function(d) {return d * 5})   //Change the radius of each circle, so r increments by 5 at a time
    .attr('cx', function(d) {return d * 50})         
    .attr('cy', 50)         
    .attr('fill', 'red')   


//Create another data
var data = [1,2,3]
//Select circle and bind new data to it
//Circles with new data in dark green color
var newData = [1,2,3]
var circles = myChart.selectAll('circle').data(newData)
	.attr('fill', 'darkgreen')

//Remove the current circles relate to data file
//circles.remove(); 

//Remove the red circles which is not related to the new data
//Transition is for a small animation
circles.exit().transition().remove();


//A more complex data file
var dataset = [
 	{name: 'Mary', age: 40},
 	{name: 'John', age: 10},
 	{name: 'Peter', age: 30},
	{name: 'Katrina', age: 20}
];

//Create a div in your html and then append paragraphs
//To show the names in the dataset
var myName = d3.select("#name")
myName.selectAll("p").data(dataset)
	.enter()
	.append("p")
	.text(function(d) {return d.name})

