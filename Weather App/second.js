document.querySelector('.search-btn').addEventListener('click', getWeather);

async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) {
        alert("Please enter a city name");
        return;
    }

    const apiKey = 'cac72b86fcec1c6926574dff198eb21d'; // Your actual API key
    const apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
            throw new Error("City not found");
        }

        const data = await response.json();

        // Fill main data
        document.querySelector('.city').textContent = `${data.name}, ${data.sys.country}`;
        document.querySelector('.text').textContent = data.weather[0].description;

        // Optional: Change image based on weather condition (e.g., clear, rain)
        // const iconCode = data.weather[0].icon;
        // const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
        // document.querySelector('.description img').src = iconUrl;

        // Fill details
        document.querySelector('.feels-like').textContent = data.main.feels_like;
        document.querySelector('.humidity').textContent = data.main.humidity;
        document.querySelector('.wind').textContent = data.wind.speed;
        document.querySelector('.visibility').textContent = (data.visibility / 1000).toFixed(1); // convert m to km
        document.querySelector('.pressure').textContent = data.main.pressure;

    } catch (error) {
        alert(error.message);
        console.error("Fetch error:", error);
    }
}
