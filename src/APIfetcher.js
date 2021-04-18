export default async function asyncWeather(city = 'London') {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=1bc3162ef9f1c153a0e6581ca59c403f`)
  response
  // vs the actual response. Oh, they look identical. But watch:
  // const notdata = response.json() 
  //(not)data is a promise of the actual response // then response
  const data = await response.json()
  return { 
humidity: data.main.humidity,
temp_max:data.main.temp_max,
temp_min:data.main.temp_min,
temp_fah:data.main.temp,
city:data.name,
description:data.weather[0].description,
short_description:data.weather[0].main,
speed:data.wind.speed,
country:data.sys.country}
  //with await, data is the response parsed into JSON. If I remove the await, it turns into a promise of the object
  
}
