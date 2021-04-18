import "bootswatch/dist/minty/bootstrap.min.css"
import asyncWeather from './APIfetcher.js'

window.onload = () => {
  lol('London')
}



const article = document.querySelector('#data')

const searchForm = document.querySelector('#search-bar')

searchForm.addEventListener('submit', selectQuery)

function selectQuery(e) {
  e.preventDefault()
  if(searchForm[0].value == '') {return}
  const city = e.target[0].value
    lol(city)
  searchForm[0].value = ""
  }
  
  
function lol(e) {
    const input = e
    const promise = asyncWeather(`${input}`)
    const result = promise.then(function(result){
      for(let property in result) {
        const query = `#${property}`
        let prop = document.querySelector(query)  
        console.log(prop)
    prop.innerText = `${result[property]}`
  //  prop.setAttribute('class', result[property] )
}
})
  }



