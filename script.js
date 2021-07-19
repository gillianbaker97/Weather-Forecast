
  var current = document.querySelector('.card-deck');
  var searchButton = document.querySelector('#inputGroup')


function getApi() {
    var askUrl = 'https://api.openweathermap.org/data/2.5/onecall?lat={40.95}&lon={-74.07}&exclude={part}&appid={2cb07c625e5379f83f22d88720054104}';

    fetch(askUrl)
        .then(function (response){
            return response.json();
        })

        .then(function(data){
            console.log(data)

            for (var i = 0; i < data.length; i++){
                var container = document.querySelector('.container');
                var temp = document.querySelector('card-text');
                var wind = document.querySelector('card-text');
                var humidity = document.querySelector('card-text');

                link.textContent = data[i].html.url;
                link.href = data[i].html.url;

                container.appendChild(link);
                temp.appendChild('current.temp');
                wind.appendChild('current.wind_speed');
                humidity.appendChild('current.humidity');

            }
        })

}                                   

searchButton.addEventListener('click', getApi);

