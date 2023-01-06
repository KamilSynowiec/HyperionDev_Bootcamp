/*This software finds information about Johhanesburg city by using GeoDB Cities and Weather APIs. It makes use of node.js fetch.
The details of the city that are shown: Population, Elevation and Current temperature */



//variables used to store position of the city to use for finding out temperature from the second api
let longitude;
let latitude;


const optionsCity = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c24132acdemsh8f13cfa66d7c6b8p1d25c7jsnec2d75b1a2fd',
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

const optionsWeather = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'c24132acdemsh8f13cfa66d7c6b8p1d25c7jsnec2d75b1a2fd',
        'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
    }
};

fetch('https://wft-geo-db.p.rapidapi.com/v1/geo/cities/Q34647', optionsCity)   //Q34647 - Johannesburg wikidata ID used to find the city
	.then(response => response.json())
	.then(response => {

        //display details about the city: name, population and elevation
        console.log("city: "+response.data.city);
        console.log("population: "+response.data.population+"\n");
        console.log("elevation: "+response.data.elevationMeters+"m");   

        /*saving location details of the city into variables to use in weather API */
        longitude=response.data.longitude;  
        latitude=response.data.latitude;
    })
	.catch(err => console.error(err));    



    
fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=28.041638888&lat=-26.204361111', optionsWeather)
    .then(response => response.json())
    .then(response => {
        console.log("Current temperature: "+response.data[0].temp) //displaying current remperature

    })
    .catch(err => console.error(err));
