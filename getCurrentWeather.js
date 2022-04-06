import {
    getWeather
} from './fetch.js';

importCurrentTemp();

document.getElementById('link').onclick = function () {
    var city = document.getElementById('link_id').value;
    importCurrentTemp(city);
};

function importCurrentTemp(city) {



    var weatherList = getWeather(city);
    weatherList.then(currentTemp); //Aktuell temperatur
}

//Funktion för aktuell temperatur
function currentTemp(weatherList) {

    var singleImg = new Image();
    singleImg.id = "icon";
    singleImg.src = 'http://openweathermap.org/img/w/' + weatherList.weather[0].icon + '.png';
    let singleTemp = document.createElement("p");
    let singleName = document.createElement("p");
    document.querySelector("header").appendChild(singleName);
 
 
   
    document.querySelector("header").appendChild(singleTemp);
    document.querySelector("header").appendChild(singleImg);
    //Letar efter indexposition i arrayen för aktuell temperatur för nästkommande timme
    //var findTemp = weatherList[0];
    //var currentIndex = findTemp.findIndex((x) => x.name === "t");
    singleName.append(weatherList.name);
    singleTemp.append(weatherList.main.temp + "C");
   
}