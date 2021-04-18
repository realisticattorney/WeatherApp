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
  



