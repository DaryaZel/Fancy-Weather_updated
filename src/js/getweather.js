const weatherKey = 'b0d4ec23231e46e783cf470b98d263d7'
const kelvin = 273
import {
  temperature,
  imageIcon,
  feelsLike,
  wind,
  humidity,
  temperature1,
  temperature2,
  temperature3,
  imageIcon1,
  imageIcon2,
  imageIcon3,
  description
} from './loadhtml.js';

export let overcast;

export async function drawWeatherByCoordinates(lat, lon) {
  debugger
  let api = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${weatherKey}`)
  let data = await api.json()
  temperature.innerHTML = `${Math.floor(data.list[0].main.temp - kelvin)}º`
  imageIcon.src = `assets/icon_big/${data.list[0].weather[0].icon}.png`
  feelsLike.innerHTML = `Feels like: ${Math.floor(data.list[0].main.feels_like - kelvin)}º`
  wind.innerHTML = `Wind: ${data.list[0].wind.speed}m/s`
  humidity.innerHTML = `Humidity: ${data.list[0].main.humidity}%`
  temperature1.innerHTML = `${Math.floor(data.list[5].main.temp - kelvin)}º`
  imageIcon1.src = `assets/icon_min/${data.list[5].weather[0].icon}.png`
  temperature2.innerHTML = `${Math.floor(data.list[13].main.temp - kelvin)}º`
  imageIcon2.src = `assets/icon_min/${data.list[13].weather[0].icon}.png`
  temperature3.innerHTML = `${Math.floor(data.list[21].main.temp - kelvin)}º`
  imageIcon3.src = `assets/icon_min/${data.list[21].weather[0].icon}.png`
  overcast = `${data.list[0].weather[0].description}`
  description.innerHTML = `${data.list[0].weather[0].description}`
  document.querySelector('.main-weatherContent-weather').classList.remove('animate')
  Array.from(document.querySelectorAll('.forecast')).forEach(e => e.classList.remove('animate'))
}