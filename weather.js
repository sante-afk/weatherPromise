// https://api.openweathermap.org/data/2.5/weather?
// lat={lat}&
// lon={lon}&
// appid={API key}


(() => {
    _getCoordLonLat();
    _getWeatherDescription();
})();

function _getCoordLonLat () {
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
            })
                
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
            })
    });
}