const apikey = "1a18c6d0e969ec46d51601efb48514ed";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
// const body = document.querySelector('body')


async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);


    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }

    else {
        var data = await response.json();

        // console.log(data)

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";




        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png"


            document.body.style.backgroundImage = "url(./images/clouds-moving.gif)";
        }

        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png"

            document.body.style.backgroundImage = "url(./images/clear-moving.gif)";
        }

        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png"


            //change body background into a picture named rain-moving.gif


        
            document.body.style.backgroundImage = "url(./images/rain-moving.gif)";
        

        }

   
           

        
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png"

            document.body.style.backgroundImage = "url(./images/dizzle-moving.gif)";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png"
            document.body.style.backgroundImage = "url(./images/mist-moving.gif)";
        }

        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png"
            document.body.style.backgroundImage = "url(./images/snow-moving.gif)";
        }

        document.querySelector(".weather").style.display = "block";

        document.querySelector(".error").style.display = "none";

    }


}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);

})

searchBox.addEventListener('keydown', e => {
    if (e.key === 'Enter') {
        checkWeather(searchBox.value);
    }
});