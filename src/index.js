import asyncWeather from './APIfetcher';
import gif from './GIFfetcher';

const searchForm = document.querySelector('#search-bar');

function weatherDOM(e) {
  const input = e;
  const promise = asyncWeather(`${input}`);
  promise.then((result) => {
    Object.keys(result).forEach((property) => {
      const query = `#${property}`;
      const prop = document.querySelector(query);
      prop.innerText = `${result[property]}`;
      if (property === 'temp_max' || property === 'temp_min' || property === 'temp_celcius') {
        prop.innerText = `${Math.round(result[property] - 273.15)} C`;
        prop.celcius = `${Math.round(result[property] - 273.15)}`;
      }
      if (property === 'short_description') {
        prop.style.display = 'none';
        gif(`${result[property]}`);
      }
    });
  });
}
function selectQuery(e) {
  e.preventDefault();
  if (searchForm[0].value === '') { return; }
  const city = e.target[0].value;
  weatherDOM(city);
  searchForm[0].value = '';
}
searchForm.addEventListener('submit', selectQuery);

window.onload = () => {
  weatherDOM('London');
};

function converter(e) {
  const temp = document.querySelector('#temp_celcius');
  const tempMax = document.querySelector('#temp_max');
  const tempMin = document.querySelector('#temp_min');
  if (e.path[0].className === 'btn btn-success') {
    temp.innerHTML = `${(parseInt(temp.innerHTML, 10) * (9 / 5)) + 32} F`;
    tempMax.innerHTML = `${(parseInt(tempMax.innerHTML, 10) * (9 / 5)) + 32} F`;
    tempMin.innerHTML = `${(parseInt(tempMin.innerHTML, 10) * (9 / 5)) + 32} F`;
    e.path[0].className = 'btn btn-primary';
    e.path[0].innerText = 'Convert to Celcius';
  } else {
    temp.innerHTML = `${temp.celcius} C`;
    tempMax.innerHTML = `${tempMax.celcius} C`;
    tempMin.innerHTML = `${tempMin.celcius} C`;
    e.path[0].className = 'btn btn-success';
    e.path[0].innerText = 'Convert to Fahrenheit';
  }
}

const celciusButton = document.querySelector('#converter');
celciusButton.addEventListener('click', converter);
