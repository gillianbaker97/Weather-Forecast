
var current = document.querySelector('.card-deck');
var searchButton = document.querySelector('.form-control');
var weatherCard = document.querySelector('.weather-card');
var repoForecast = document.querySelector('.forecast');



var formSubmitHandler = function(event){
      event.preventDefault();

      var city = searchButton.value.trim(); /*trims white space from the input button*/

      if (city) {
          getUserRepos(city);
        
          weatherCard.textContent = '';/* asks the weather card to display the correct city once inputted */

         } else {
            alert('Please enter a city name'); /* if the city isn't recognized in the repo's we ask for another input*/
         }
  };

var foreCast = function (event) {
    var forecast = event.target.getAttribute('.forecast'); /* gets the forecast for each day of the week */

    if (forecast) {
        getFeaturedRepos(forecast);

        weatherCard.textContent = '';
    }
};

var getUserRepos = function (user) {
    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={40.95}&lon={-74.07}&exclude={part}&appid={2cb07c625e5379f83f22d88720054104}';

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
    var apiUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={40.95}&lon={-74.07}&exclude={part}&appid={2cb07c625e5379f83f22d88720054104}';
    
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


var displayForecast = function (repos, forecast) {
    if (repos.length === 0) {
      weatherCard.textContent = 'No repositories found.';
      return;
    }

    weatherCard.textContent = forecast;

    for (var i = 0; i < data.length; i++){
    var container = document.querySelector('.container');
    var temp = document.querySelector('temp');
    var wind = document.querySelector('wind');
    var humidity = document.querySelector('humidity');

    link.textContent = data[i].html.url;
    link.href = data[i].html.url;

    container.appendChild(link);
    temp.appendChild('current.temp');
    wind.appendChild('current.wind_speed');
    humidity.appendChild('current.humidity');

            }
        }; 

                                 

searchButton.addEventListener('click', apiUrl);

