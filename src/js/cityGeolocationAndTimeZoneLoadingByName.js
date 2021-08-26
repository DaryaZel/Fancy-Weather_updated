import {drawHumanReadableCoordinates, changeMapAppearance, timerId} from './getlocation.js';
import {} from './getlocation.js';
import { locationKey } from './main.js';
import { drawWeatherByCoordinates } from './getweather.js';
import { getLocation } from './main.js';
import {map} from './main.js';
export async function cityGeolocationAndTimeZoneLoadingByName(city) {
    let link = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${city}&key=${locationKey}`);
    let data = await link.json()
    let latForLocation = data.results[0].geometry.lat
    let lonForLocation = data.results[0].geometry.lng
    let timeZone = data.results[0].annotations.timezone.name
    changeMapAppearance(latForLocation, lonForLocation, timeZone)
    drawHumanReadableCoordinates(String(latForLocation), String(lonForLocation))
    clearInterval(timerId)
    drawWeatherByCoordinates(latForLocation, lonForLocation).catch(alert); 
    getLocation(latForLocation, lonForLocation, timeZone).catch(alert); 
  }