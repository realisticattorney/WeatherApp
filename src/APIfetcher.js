const asyncWeather = async (city = 'London') => {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1bc3162ef9f1c153a0e6581ca59c403f`, {
    mode: 'cors',
  });
  const data = await response.json();
  return {
    humidity: data.main.humidity,
    temp_max: data.main.temp_max,
    temp_min: data.main.temp_min,
    temp_celcius: data.main.temp,
    city: data.name,
    description: data.weather[0].description,
    short_description: data.weather[0].main,
    speed: data.wind.speed,
    country: data.sys.country,
  };
};
export default asyncWeather;