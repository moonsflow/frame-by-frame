var express = require('express');
var router = express.Router();

var Forecast = require('forecast.io');

var API_KEY = 'f937b8d3a9abe4916e0e9fd8c21ae774';
var LATITUDE = 37.4023;
var LONGITUDE = 126.6717;

var options = {
  APIKey: API_KEY,
  units: 'si',
  exclude: 'minutely,hourly,daily,flags,alerts'
};

var forecast = new Forecast(options);


/*
{
  "latitude": 37.4023,
  "longitude": 126.6717,
  "timezone": "Asia/Seoul",
  "offset": 9,
  "currently": {
  "time": 1457935284,
    "summary": "Clear",
    "icon": "clear-day",
    "precipIntensity": 0,
    "precipProbability": 0,
    "temperature": 5.34,
    "apparentTemperature": 1.89,
    "dewPoint": -3.33,
    "humidity": 0.54,
    "windSpeed": 4.74,
    "windBearing": 307,
    "cloudCover": 0.18,
    "pressure": 1022.15,
    "ozone": 387.52
  }
}
*/


router.route('/weather')
  .get(function(request, response) {
    forecast.get(LATITUDE, LONGITUDE, options, function (err, res, data) {
      if (err) throw err;
      response.json(data);
    });
  });


module.exports = router;