// https://api.openweathermap.org/data/2.5/weather?
// lat={lat}&
// lon={lon}&
// appid={API key}

function getCoordLonLat () {
    return new Promise ((resolve, reject) => {
        fetch("https://api.openweathermap.org/data/2.5/weather?lat=???&lon=????&appid=????")
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
                        new Error('excuse me, you... where are you?)');
                        reject(oError);
                    }
                })
            .catch(oError => {
                if (oError) {
                    new Error('response error' + response.status);
                    reject(oError);
                }
            })
                
    });
}

getCoordLonLat();
