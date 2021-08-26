import {drawingBodyBackground} from './drawingBodyBackground.js';
export async function loadImageAndApplyToBackground (month, hours, weather) {
  let dayTime
  let yearTime = {
    0: 'Winter',
    1: 'Winter',
    2: 'Spring',
    3: 'Spring',
    4: 'Spring',
    5: 'Summer',
    6: 'Summer',
    7: 'Summer',
    8: 'Autumn',
    9: 'Autumn',
    10: 'Autumn',
    11: 'Winter'
  }
  if (hours <= 5) {
    dayTime = 'night'
  }
  else if (hours > 5 && hours <= 12) {
    dayTime = 'morning'
  }
  else if (hours > 12 && hours <= 18) {
    dayTime = 'day'
  }
  else if (hours > 18 && hours <= 23) {
    dayTime = 'evening'
  }
  let link = await fetch(`https://api.unsplash.com/photos/random?query="${yearTime[month]}"+'${weather}'+'${dayTime}'&client_id=f97b2c2efb20ff56cdae5205b2a3d90e87a94b973d29f20363dab93297d57125`);
  let data = await link.json()
  drawingBodyBackground(data.urls.full)
}
