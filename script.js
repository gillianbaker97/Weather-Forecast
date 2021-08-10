
var current = document.querySelector('.card-deck');
var searchButton = document.querySelector('.form-control');
var currentWeather = document.querySelector('#current-temp');
var repoForecast = document.querySelector('.forecast');



function todayWeather() {
  var userSearch = document.getElementById('user-search').value;
  console.log(userSearch);
  var apiToday = 'api.openweathermap.org/data/2.5/weather?q=' + userSearch + '&appid=2cb07c625e5379f83f22d88720054104';
  console.log(apiToday)

  fetch(apiToday)
    .then(console.log(response.json));

};

document.getElementById('searchButton').addEventListener('click', todayWeather);
 

function nextWeather () {
  var userSearch = document.getElementById('user-search').value;
  console.log(userSearch);
  var apiNext = 'api.openweathermap.org/data/2.5/forecast?q=' + userSearch + '&appid=2cb07c625e5379f83f22d88720054104';
  console.log(apiNext);

  fetch(apiNext)
    .then(console.log(response.json));
};

document.getElementById('searchButton').addEventListener('click', nextWeather);


var formSubmitHandler = function(event){
  event.preventDefault();
  var city = userSearch.value.trim(); /*trims white space from the input button*/
  localStorage.setItem("city");
  };

var displayCity = function(event){
  event.preventDefault();
  var city = userSearch.value.trim(); /*trims white space from the input button*/
  localStorage.getItem("city") = document.getElementById('search-result');
}

/*  var foreCast = function (event) {
    var forecast = event.target.getAttribute('.forecast'); /* gets the forecast for each day of the week */

    /* if (forecast) {
        getFeaturedRepos(forecast);

        weatherCard.textContent = '';
    }
}; */

/* var getUserRepos = function (user) {
    var apiUrl = 'api.openweathermap.org/data/2.5/weather?lat=40.95&lon=-74.07&appid=2cb07c625e5379f83f22d88720054104';
    //var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={40.95}&lon={-74.07}&exclude={part}&appid={2cb07c625e5379f83f22d88720054104}';
    fetch(apiUrl)
        .then(function(response){
            if(response.ok){
                response.json().then(function(data){
                    displayRepos(data);
                });
            } else {
                alert('Error:' + response.statusText);
            }
        })
        .catch(function(error){
            alert('Unable to connect to Weather');
        });
}; 


var getForecastRepos = function(language) {
  var apiUrl = 'api.openweathermap.org/data/2.5/weather?lat=40.95&lon=-74.07&appid=2cb07c625e5379f83f22d88720054104';

    
    fetch(apiUrl).then(function (response) {
        if (response.ok) {
          response.json().then(function (data) {
            displayRepos(data.items);
          });
        } else {
          alert('Error: ' + response.statusText);
        }
      });
    };
*/

var displayForecast = function (repos, forecast) {
    if (repos.length === 0) {
      weatherCard.textContent = 'No repositories found.';
      return;
    };

    weatherCard.textContent = forecast;

    for (var i = 0; i < data.length; i++){

    var container = document.querySelector('.container');
    var temp = document.querySelector('.temp');
    var wind = document.querySelector('.wind');
    var humidity = document.querySelector('.humidity');

    link.textContent = data[i].html.url;
    link.href = data[i].html.url;

    container.appendChild(link);
    temp.appendChild('current.temp');
    wind.appendChild('current.wind_speed');
    humidity.appendChild('current.humidity');

            }
        }; 

                                 

//searchButton.addEventListener('click', apiUrl);

