let APIKey = "b467884d90d5f5312a326152e875f308";

let weatherReportDetails = document.querySelector("#weatherReportDetails");
let weatherReport = "";

displayWeatherReportDetails()

function displayWeatherReportDetails() {

    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=b467884d90d5f5312a326152e875f308";
    

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response)

        let cityName = document.createElement("h1")
        cityName.textContent = response.city.name;
        weatherReportDetails.prepend(cityName)

        let todaysDate = document.createElement("p")
        todaysDate.text(moment().format("DDD MMM, YYYY"))

        let cityTemperature = document.createElement("p")
        cityTemperature.textContent = response.list[0].main.temp;
        weatherReportDetails.prepend(cityTemperature)

        let cityHumidity = document.createElement("p")
        cityHumidity.textContent = response.response.list[0].main.humidity;
        weatherReportDetails.prepend(cityHumidity)

        let cityWindSpeed = document.createElement("p")
        cityWindSpeed.textContent = response.list[0].main.wind;
        weatherReportDetails.prepend(cityWindSpeed)

        let weatherConditionsimg = document.createElement('img');
        img.src = response.Image;
        weatherReportDetails.appendChild(img);


    })

}

// document.querySelector("#add-movie").addEventListener("click", function (event) {
//     event.preventDefault();
    
//     if(movieInput.value.trim() !== ""){
//       buttonsView.innerHTML = "";
//       let newMovie = movieInput.value
//       movies.push(newMovie);
//       movieInput.value ="";
//       renderButtons();
//     }
  
//   });