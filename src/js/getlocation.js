import { map } from './main.js';
import { latitude, longitude } from './loadhtml.js';
import { getLocation, getTime } from './main.js';
import { drawWeatherByCoordinates } from './getweather.js';
export let timerId;

export async function onGeolocationSuccess() {
  const keyInfoLocation = 'bb63f6b8136722'
  let api = await fetch(`https://ipinfo.io/json?token=${keyInfoLocation}`)
  debugger
  let data = await api.json()
  let loc = data.loc.split(',')
  let timeZone = data.timezone
  let latForLocation = loc[0]
  let lonForLocation = loc[1]
  drawHumanReadableCoordinates(latForLocation, lonForLocation)
  changeMapAppearance(latForLocation, lonForLocation, timeZone);
  drawWeatherByCoordinates(latForLocation, lonForLocation).catch(alert);
  getLocation(latForLocation, lonForLocation, timeZone)
}

export async function goToDefaultLocation() {
  debugger
  let timeZone = "Europe/Minsk"
  let latForLocation = 53.893009
  let lonForLocation = 27.567444
  changeMapAppearance(latForLocation, lonForLocation, timeZone)
  // let minsk = new google.maps.LatLng(55.776952, 37.389405);
}

export function onGeolocationFailure() {
  debugger
  goToDefaultLocation();
}

export function changeMapAppearance(latForLocation, lonForLocation, timeZone) {
  let minsk = new mapboxgl.LngLat(lonForLocation, latForLocation);
  map.setCenter(minsk);
  map.zoomTo(8);
  // timerId = setInterval(getTime, 30000, timeZone);
}

export function drawHumanReadableCoordinates(latForLocation, lonForLocation) {
  debugger
  let latFirstPart = latForLocation.split('.')[0]
  let latSecondPart = `0.${latForLocation.split('.')[1]}`
  let lonFirstPart = lonForLocation.split('.')[0]
  let lonSecondPart = `0.${lonForLocation.split('.')[1]}`
  let latSecondPartNumber = parseFloat(latSecondPart)
  let lonSecondPartNumber = parseFloat(lonSecondPart)
  let latSecondPartNumberRounded = String(Math.round((latSecondPartNumber) * 100))
  let lonSecondPartNumberRounded = String(Math.round((lonSecondPartNumber) * 100))
  latitude.innerHTML = `Latitude: ${latFirstPart}º ${latSecondPartNumberRounded}'`
  longitude.innerHTML = `Longitude: ${lonFirstPart}º ${lonSecondPartNumberRounded}'`
  document.querySelector('.main-wrapper-geolocation').classList.remove('animate')
}