import "bootswatch/dist/minty/bootstrap.min.css"
import asyncWeather from './APIfetcher.js'
import gif from "./GIFfetcher.js"

window.onload = () => {
  weatherDOM('London')
}

const searchForm = document.querySelector('#search-bar')
searchForm.addEventListener('submit', selectQuery)

function selectQuery(e) {
  e.preventDefault()
  if(searchForm[0].value == '') {return}
  const city = e.target[0].value
    weatherDOM(city)
  searchForm[0].value = ""
  }
  
  
function weatherDOM(e) {
    const input = e
    const promise = asyncWeather(`${input}`)
    const result = promise.then(function(result){
      for(let property in result) {
        const query = `#${property}`
        let prop = document.querySelector(query)  
    prop.innerText = `${result[property]}`
    if(property === 'temp_max' || property === 'temp_min' || property === 'temp_celcius') {
      prop.innerText = `${Math.round(result[property] - 273.15)} C`
      prop.celcius = `${Math.round(result[property] - 273.15)}`
    }
    if(property === 'short_description') {
      prop.style.display = "none";
      gif(`${result[property]}`)
    }}
})
}

const celcius_button = document.querySelector('#converter')
celcius_button.addEventListener('click', converter)

function converter(e) {
  const temp = document.querySelector('#temp_celcius')
  const temp_max = document.querySelector('#temp_max')
  const temp_min = document.querySelector('#temp_min')
  if(e.path[0].className == 'btn btn-secondary') {
    temp.innerHTML = `${(parseInt(temp.innerHTML) *(9/5)) + 32} F`
    temp_max.innerHTML = `${(parseInt(temp_max.innerHTML) *(9/5)) + 32} F`
    temp_min.innerHTML = `${(parseInt(temp_min.innerHTML) *(9/5)) + 32} F`
    e.path[0].className = 'btn btn-primary'
    e.path[0].innerText = 'Convert to Celcius'
  } else {
  temp.innerHTML = `${temp.celcius} C`
  temp_max.innerHTML = `${temp_max.celcius} C`
  temp_min.innerHTML = `${temp_min.celcius} C`
  e.path[0].className = 'btn btn-secondary'
  e.path[0].innerText = 'Convert to Fahrenheit'
}
}


