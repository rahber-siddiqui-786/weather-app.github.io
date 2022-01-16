// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

// eef47c5ac040067e085b947d86e83484

// console.log('attached')

const weatherApi = {
    key: "eef47c5ac040067e085b947d86e83484",
    baseUrl: "https://api.openweathermap.org/data/2.5/weather"
}

//Event listener function on keypress
const searchInputBox = document.getElementById('input-box');
searchInputBox.addEventListener('keypress', (event) => {
    if (event.keyCode == 13) {
        console.log(searchInputBox.value);
        getWeatherReport(searchInputBox.value);
        document.querySelector('.weather-body').style.display = 'block';
    }
});

//get weather report
function getWeatherReport(city) {
    fetch(`${weatherApi.baseUrl}?q=${city}&appid=${weatherApi.key}&units=metric`)
        .then(weather => {
            return weather.json();
        }).then(showWeatherReport);
}

//show weather report
function showWeatherReport(weather) {
    console.log(weather);

    let city = document.getElementById('city');
    city.innerHTML = `${weather.name},${weather.sys.country}`;

    let temprature = document.getElementById('temp');
    temprature.innerHTML = `${Math.round(weather.main.temp)}&deg;C`;

    let weatherType = document.getElementById('weather');
    weatherType.innerHTML = `${weather.weather[0].main}`;

    let date = document.getElementById('date');
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    const months = ["Jan","Feb","Mar","Apr","May","Jun","July","Aug","Sep","Oct","Nov","Dec"];
    
    const d = new Date();
    let month = months[d.getMonth()];
    let todayDate = d.getDate();
    let day = days[d.getDay()];
    let year = d.getFullYear();

    date.innerHTML = `${todayDate} ${month} (${day}), ${year} `;
}

