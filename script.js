let weatherAPIKey = '49728a5c20086bec1ea73e7ad14990d1';
weatherBaseEndPoint = 'https://api.openweathermap.org/data/2.5/weather?appid=' + weatherAPIKey;

let getWeatherByCityName = async (city) => {
    let endpoint = weatherBaseEndPoint + '&q=' + city;
    let response = await fetch(endpoint);

    console.log(response)
}

getWeatherByCityName('New York');

