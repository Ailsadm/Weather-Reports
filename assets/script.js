let APIKey = "b467884d90d5f5312a326152e875f308";

let weatherReportDetails = document.querySelector("#weatherReportDetails");
let weatherReport = "";

displayWeatherReportDetails()

function displayWeatherReportDetails() {

    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?lat=44.34&lon=10.99&appid=b467884d90d5f5312a326152e875f308";
    

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