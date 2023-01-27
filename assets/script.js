let APIKey = "b467884d90d5f5312a326152e875f308";
let weatherReportDetails = document.querySelector("#weatherReportDetails");
let weatherReport = "";
let longitude = ""; 
// result.city.coord.lat
let latitude = ""
// result.city.coord.lon

// displayWeatherReportDetails()

function coordinates (){
    let queryURL =  "http://api.openweathermap.org/geo/1.0/direct?q=" + $("#search-input").val() + "&appid=b467884d90d5f5312a326152e875f308"
    fetch(queryURL)
    .then(response => response.json())
    .then(function (result) {
        // console.log(result)
        longitude = result[0].lon;
        latitude = result[0].lat
        displayWeatherReportDetails()
    });

}

 function  displayWeatherReportDetails(){

    // coordinates();
    // console.log(longitude)
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=" + latitude + "&lon=" + longitude + "&appid=b467884d90d5f5312a326152e875f308";
    

    fetch(queryURL)
    .then(response => response.json())
    .then(function (result) {
        console.log(result)

        $("#date").text(moment().format("DDD MMM, YYYY"))

        weatherReportDetails.innerHTML = `<h1>${result.city.name}</h1>
        <p>${result.list[0].main.temp}</p>
        <p>${result.list[0].main.humidity}</p>
        <p>${result.list[0].wind.speed}</p>
        <img src="${'https://openweathermap.org/img/w/' + result.list[0].weather[0].icon + '.png'}">`;
       

    });

}

document.querySelector("#search-button").addEventListener("click", function(event){
    event.preventDefault();

    coordinates()

    // displayWeatherReportDetails()
})

