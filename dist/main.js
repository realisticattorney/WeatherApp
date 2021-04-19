(()=>{"use strict";const e=async(t="London")=>{try{const e=await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${t}&APPID=1bc3162ef9f1c153a0e6581ca59c403f`,{mode:"cors"}),n=await e.json();return{humidity:n.main.humidity,temp_max:n.main.temp_max,temp_min:n.main.temp_min,temp_celcius:n.main.temp,city:n.name,description:n.weather[0].description,short_description:n.weather[0].main,speed:n.wind.speed,country:n.sys.country}}catch(t){return e()}},t=e,n=document.querySelector("#search-bar"),i=e=>{t(`${e}`).then((e=>{Object.keys(e).forEach((t=>{const n=`#${t}`,i=document.querySelector(n);i.innerText=`${e[t]}`,"temp_max"!==t&&"temp_min"!==t&&"temp_celcius"!==t||(i.innerText=`${Math.round(e[t]-273.15)} C`,i.celcius=`${Math.round(e[t]-273.15)}`),"short_description"===t&&(i.style.display="none",(async e=>{document.querySelector("img").src="Clouds"===e?"https://media.giphy.com/media/xUOwGoNa2uX6M170d2/giphy.gif":"Clear"===e||"Haze"===e?"https://media.giphy.com/media/izijkWI2KBt0k/giphy.gif":"Drizzle"===e?"https://media.giphy.com/media/R761lRtHcXuRQgF1Pf/giphy.gif":"Rain"===e?"https://media.giphy.com/media/xUOwGoNa2uX6M170d2/giphy.gif":"Snow"===e?"https://media.giphy.com/media/mBu1wMFap6ePprKIeX/giphy.gif":"https://media.giphy.com/media/YkhsU98c5KsPjsTwdp/giphy.gif"})(`${e[t]}`))}))}))},a=document.querySelector("#converter");n.addEventListener("submit",(e=>{if(e.preventDefault(),""===n[0].value)return;const t=e.target[0].value;i(t),n[0].value="",a.className="btn btn-success",a.innerText="Convert to Fahrenheit"})),window.onload=()=>{i("London")},a.addEventListener("click",(e=>{const t=document.querySelector("#temp_celcius"),n=document.querySelector("#temp_max"),i=document.querySelector("#temp_min");"btn btn-success"===e.path[0].className?(t.innerHTML=`${Math.round(1.8*parseInt(t.innerHTML,10)+32)} F`,n.innerHTML=`${Math.round(1.8*parseInt(n.innerHTML,10))+32} F`,i.innerHTML=`${Math.round(1.8*parseInt(i.innerHTML,10)+32)} F`,e.path[0].className="btn btn-primary",e.path[0].innerText="Convert to Celcius"):"btn btn-primary"===e.path[0].className&&(t.innerHTML=`${t.celcius} C`,n.innerHTML=`${n.celcius} C`,i.innerHTML=`${i.celcius} C`,e.path[0].className="btn btn-success",e.path[0].innerText="Convert to Fahrenheit")}))})();