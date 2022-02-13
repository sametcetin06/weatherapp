const IS_LOCAL = process.env.NODE_ENV !== 'production';
const TOKEN_TYPE = 'JWT ';

const API_URL = IS_LOCAL ? 'http://localhost:8000/' : 'http://localhost:8000/';
const WEATHER_SERVICE_URL = 'http://api.worldweatheronline.com/premium/v1/weather.ashx';
const WEATHER_SERVICE_KEY = 'ccd6e846a58040f9bdc124249221202';

export {
  IS_LOCAL,
  API_URL,
  WEATHER_SERVICE_URL,
  TOKEN_TYPE,
  WEATHER_SERVICE_KEY
};
