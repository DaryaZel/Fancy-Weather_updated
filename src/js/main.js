import { cityGeolocationAndTimeZoneLoadingByName } from './cityGeolocationAndTimeZoneLoadingByName.js';
import { loadImageAndApplyToBackground  } from './loadImageAndApplyToBackground.js';
import { overcast as weather } from './getweather.js';
import { onGeolocationSuccess, onGeolocationFailure } from './getlocation.js';
import { createHtml } from './loadhtml.js';
import {
  latitude,
  longitude,
  temperature,
  temperature1,
  temperature2,
  temperature3,
  city,
  time,
  time1,
  time2,
  time3,
  C,
  F
} from './loadhtml.js';

let month, hours
export let map

window.onload = function () {
  createHtml()
  initializeMap()
  navigator.geolocation.getCurrentPosition(onGeolocationSuccess, onGeolocationFailure);
}

function initializeMap() {
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGFyeWF6ZWwiLCJhIjoiY2tzZGltaDhvMDdmMDJub2Z0bm96ZXpmaSJ9.ZUGaWGtld7GMOEDenmp_rQ';
  map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11',
  });
}

export const locationKey = '056dbb2e73e343e5887b4108adf6e9d4'

export async function getLocation(lat, lon, timeZone) {
  try {
    let api = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=${locationKey}&language=en&q=${lat}, ${lon}`)
    let data = await api.json()
    let array = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    let options = { timeZone: `${timeZone}`, weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric' };
    let timeDay = new Date().toLocaleString("en-GB", options)
    let Xmas95 = new Date(`${timeDay}`);
    let weekdayFirst = new Date()
    let weekdaySecond = new Date()
    let weekdayThird = new Date()
    weekdayFirst.setDate(Xmas95.getDay() + 6);
    weekdaySecond.setDate(Xmas95.getDay() + 7);
    weekdayThird.setDate(Xmas95.getDay() + 8);
    time.innerHTML = `${timeDay}`
    time1.innerHTML = `${array[weekdayFirst.getDay()]}`
    time2.innerHTML = `${array[weekdaySecond.getDay()]}`
    time3.innerHTML = `${array[weekdayThird.getDay()]}`;
    month = Xmas95.getMonth();
    hours = Xmas95.getHours();
    if (data.results[0].components.city) {
      city.innerHTML = `${data.results[0].components.city}, ${data.results[0].components.country}`
    }
    else if (data.results[0].components.town) { city.innerHTML = `${data.results[0].components.town}, ${data.results[0].components.country}` }
    else if (!data.results[0].components.city && !data.results[0].components.town) {
      city.innerHTML = "NONAME place"
      alert("Location is not found!")
    }
    debugger
    document.querySelector('.main-weatherContent-location').classList.remove('animate')
    loadImageAndApplyToBackground (month, hours, weather).catch(alert);
  }
  catch (err) {
    alert(err);
  }
}

export function getTime(timeZone) {
  let options = { timeZone: `${timeZone}`, weekday: 'long', day: 'numeric', month: 'long', hour: 'numeric', minute: 'numeric' };
  let timeDay = new Date().toLocaleString("en-GB", options)
  time.innerHTML = `${timeDay}`
}

document.body.addEventListener('click', (e) => {
  if (e.target.id === "refreshImg") {
    loadImageAndApplyToBackground (month, hours, weather).catch(alert);
  }
  else if (e.target.id === "search-button") {
    let city = e.target.previousElementSibling.value
    cityGeolocationAndTimeZoneLoadingByName(city).catch(alert);
  }
  else if (e.target.id === "F" && e.target.classList[0] !== "active") {
    e.target.classList.add("active")
    e.target.nextElementSibling.classList.remove("active")
    temperature.innerHTML = `${Math.round(((+temperature.innerHTML.split('º')[0]) * 1.8) + 32)}º`
    temperature1.innerHTML = `${Math.round(((+temperature1.innerHTML.split('º')[0]) * 1.8) + 32)}º`
    temperature2.innerHTML = `${Math.round(((+temperature2.innerHTML.split('º')[0]) * 1.8) + 32)}º`
    temperature3.innerHTML = `${Math.round(((+temperature3.innerHTML.split('º')[0]) * 1.8) + 32)}º`
  }
  else if (e.target.id === "C" && e.target.classList[0] !== "active") {
    e.target.classList.add("active")
    e.target.previousElementSibling.classList.remove("active")
    temperature.innerHTML = `${Math.round(((+temperature.innerHTML.split('º')[0]) - 32) / 1.8)}º`
    temperature1.innerHTML = `${Math.round(((+temperature1.innerHTML.split('º')[0]) - 32) / 1.8)}º`
    temperature2.innerHTML = `${Math.round(((+temperature2.innerHTML.split('º')[0]) - 32) / 1.8)}º`
    temperature3.innerHTML = `${Math.round(((+temperature3.innerHTML.split('º')[0]) - 32) / 1.8)}º`
  }
});

