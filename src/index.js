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
    while (article.firstChild) {
    article.removeChild(article.firstChild);}
    lol(city)
  searchForm[0].value = ""
  }
  
  
function lol(e) {
    const input = e
    const promise = asyncWeather(`${input}`)
    
    const result = promise.then(function(result){
      
      for(let property in result) {
        const p = document.createElement('p')  
    console.log(property)
    p.innerText = `${property}: ${result[property]}`
    p.classList.add(`${property}`)
    p.setAttribute('id', result[property] )
    article.appendChild(p)
}
})
  }



