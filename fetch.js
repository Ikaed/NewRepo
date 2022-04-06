export function getWeather(city) {
    return fetch('http://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=96b93715b2af3387f93252f194d5a149')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            return data;
        });
}
// JavaScript source code
