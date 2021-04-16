async function weatherFetch(location = "London,uk") {
const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=1bc3162ef9f1c153a0e6581ca59c403f`, {
  mode: 'cors'
}).then(response => response.json()).catch(e => console.log(e))
return response
}

module.exports = {
  weatherAPI: weatherFetch
}