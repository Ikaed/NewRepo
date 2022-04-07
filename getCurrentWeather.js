import {
    getWeather
} from './fetch.js';

importCurrentTemp();

document.getElementById('search').onclick = function () {
    var city = document.getElementById('search_id').value;
    importCurrentTemp(city);
};

function importCurrentTemp(city) {

    var weatherList = getWeather(city);
    weatherList.then(currentTemp); //Aktuell temperatur
}

function deletePreviousSearch() {
    var resetSearch = document.getElementById('searchResult');
    resetSearch.innerHTML = '';
   
}

//Funktion för aktuell temperatur
function currentTemp(weatherList) {

    deletePreviousSearch();
    let singleTime = document.createElement("p");
    var singleImg = new Image();
    singleImg.id = "icon";
    singleImg.src = 'http://openweathermap.org/img/w/' + weatherList.weather[0].icon + '.png';
    let singleTemp = document.createElement("p");
    let singleName = document.createElement("p");

    singleName.setAttribute("id", "name");

    document.querySelector("#searchResult").appendChild(singleTime);




    document.querySelector("header").appendChild(singleName);
 
 
   
    document.querySelector("#searchResult").appendChild(singleTemp);
    document.querySelector("#searchResult").appendChild(singleImg);
    //Letar efter indexposition i arrayen för aktuell temperatur för nästkommande timme
    //var findTemp = weatherList[0];
    //var currentIndex = findTemp.findIndex((x) => x.name === "t");

    var d = new Date()
    var localTime = d.getTime()
    var localOffset = d.getTimezoneOffset() * 60000
    var utc = localTime + localOffset
    var time = utc + (1000 * weatherList.timezone);
    console.log(weatherList.timezone)
    var nd = new Date(time);
  

    singleTime.append(nd);
    singleName.append(weatherList.name);
    singleTemp.append(weatherList.main.temp + "C");

    


}
