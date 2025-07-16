// https://api.openweathermap.org/data/2.5/weather?
// lat={lat}&
// lon={lon}&
// appid={API key}


(() => {
    _getWeatherTemp();
    _getWeatherCountry();
    _getWeatherCoordLonLat();
    _getWeatherDescription();
})();
function _getWeatherCountry () {
    return new Promise ((resolve, reject) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?" +
            "lat=&" +
            "lon=&" +
            "appid=")
            .then(response => {
                return response.json();
            })
                .then(oData => {
                    if (oData) {
                        const country = document.getElementById('country');
                        country.textContent = oData.sys.country;
                        resolve(oData);
                    }
                })
                .catch(oError => {
                    if (oError) {
                        new Error('What kind of country is this?)' + oError.status);
                        reject(oError);
                    }
                })
            .catch(oError => {
                if (oError) {
                    new Error('response error' + oError.status);
                    reject(oError);
                }
            });
    })
}

function _getWeatherCoordLonLat () {
    return new Promise ((resolve, reject) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?" +
            "lat=&" +
            "lon=&" +
             "appid=")
            .then(response => {
                return response.json();
            })
                .then(oData => {
                    if (oData) {
                        const latitude = document.getElementById('latitude');
                        const longitude = document.getElementById('longitude');
                        latitude.textContent = oData.coord.lat;
                        longitude.textContent = oData.coord.lon;
                        resolve(oData);
                    }
                })
                .catch(oError => {
                    if (oError) {
                        new Error('excuse me, you... where are you?)' + oError.status);
                        reject(oError);
                    }
                })
            .catch(oError => {
                if (oError) {
                    new Error('response error' + oError.status);
                    reject(oError);
                }
            });
                
    });
}

function _getWeatherDescription () {
    return new Promise ((resolve, reject) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?" +
            "lat=&" +
            "lon=&" +
            "appid=")
            .then(response => {
                return response.json();
            })
                .then(oData => {
                    if (oData) {
                        const weatherDescription = document.getElementById('weatherDescription');
                        weatherDescription.textContent = oData.weather[0].description;
                        resolve(oData);
                    }
                })
                .catch(oError => {
                    if (oError) {
                        new Error('Looks like bad weather(' + oError.status);
                        reject(oError);
                    }
                })
            .catch(oError => {
                if (oError) {
                    new Error('response error' + oError.status);
                    reject(oError);
                }
            });
    });
}

function _getWeatherTemp () {
    return new Promise ((resolve, reject) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?" +
            "lat=&" +
            "lon=&" +
            "appid=")
            .then(response => {
                return response.json();
            })
                .then(oData => {
                    let tempFahrenheit = document.getElementById('tempFahrenheit');
                    let tempContextFahrenheit = oData.main.temp;
                    let tempFah = ((tempContextFahrenheit - 273.15) * 1.8) + 32
                    tempFahrenheit.textContent = Math.ceil(tempFah);

                    let tempCelsius = document.getElementById('tempCelsius');
                    let tempContextCelsius = oData.main.temp;
                    let tempCels = tempContextCelsius - 273.15
                    tempCelsius.textContent = Math.ceil(tempCels);
                })
                .catch(oError => {
                if (oError) {
                    new Error('Good weather!' + oError.status);
                    reject(oError);
                }
            })
            .catch(oError => {
                if (oError) {
                    new Error('response error' + oError.status);
                    reject(oError);
                }
            });
    })
}