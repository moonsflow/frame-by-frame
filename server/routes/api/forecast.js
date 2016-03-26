import { Router } from 'express';
import Forecast from 'forecast.io';

const router = new Router();

const location = {
  lat: 37.4023,
  lng: 126.6717
};

const options = {
  APIKey: 'f937b8d3a9abe4916e0e9fd8c21ae774',
  units: 'si',
  exclude: 'minutely,hourly,daily,flags,alerts'
};

const forecast = new Forecast(options);

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
    forecast.get(location.lat, location.lng, options, function (err, res, data) {
      if (err) throw err;
      response.json(data);
    });
  });


export default router;