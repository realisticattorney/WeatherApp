// const importWeatherAPI = require ('./openWeatherAPI.js')
// console.log(importWeatherAPI.weatherFetch)

// fetch("http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=1bc3162ef9f1c153a0e6581ca59c403f", {
//   mode: 'cors'
// }).then(response => {
//   return response.json()
// }).catch(e => {
//   console.log(e)
// }).finally(() => {
//   console.log('finally')
// })


async function weatherFetch(location = "London,uk") {
  const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1bc3162ef9f1c153a0e6581ca59c403f`, {
    mode: 'cors'
  }).then(response => response.json()).catch(e => console.log(e))
  return response
  }

  weatherFetch()


const img = document.querySelector('img');


fetch('https://api.giphy.com/v1/gifs/translate?api_key=M2wtHygZrXHfXY1EehSvpMJI20mB7Bqp&s=cats', {mode: 'cors'})
.then(function(response) {
  return response.json();
})
.then(function(response) {
  img.src = response.data.images.original.url;
});