export let latitude,
    longitude,
    temperature,
    imageIcon,
    feelsLike,
    wind,
    humidity,
    temperature1,
    imageIcon1,
    temperature2,
    imageIcon2,
    temperature3,
    imageIcon3,
    city,
    time,
    time1,
    time2,
    time3,
    description,
    C, 
    F

export async function createHtml() {
    let header = document.createElement('header'),
      figure = document.createElement('figure'),
      span1 = document.createElement('span'),
      span2 = document.createElement('span'),
      span3 = document.createElement('span'),
      span4 = document.createElement('span'),
      span5 = document.createElement('span'),
      span6 = document.createElement('span'),
      navigation = document.createElement('navigation'),
      navigation_wrapper = document.createElement('div'),
      navigation_functionality = document.createElement('div'),
      navigation_search = document.createElement('div'),
      navigation_functionality_refresh = document.createElement('input'),
      navigation_functionality_language = document.createElement('select'),
      option1 = document.createElement('option'),
      option2 = document.createElement('option'),
      navigation_functionality_F = document.createElement('input'),
      navigation_functionality_C = document.createElement('input'),
      search1 = document.createElement('input'),
      search2 = document.createElement('input'),
      main = document.createElement('main'),
      mainSection = document.createElement('section'),
      main_wrapper = document.createElement('div'),
      main_weatherContent = document.createElement('div'),
      main_weatherContent_location = document.createElement('div'),
      main_weatherContent_location_city = document.createElement('div'),
      h2City = document.createElement('h2'),
      main_weatherContent_location_time = document.createElement('div'),
      h2Time = document.createElement('h2'),
      main_weatherContent_weather = document.createElement('div'),
      main_weatherContent_weatherDIV1 = document.createElement('div'),
      h2Temperature = document.createElement('h2'),
      imgImageIcon = document.createElement('img'),
      main_weatherContent_weatherDIV2 = document.createElement('div'),
      h3 = document.createElement('h3'),
      ul = document.createElement('ul'),
      liFeelsLike = document.createElement('li'),
      liWind = document.createElement('li'),
      liHumidity = document.createElement('li'),
      main_weatherContent_forcast = document.createElement('div'),
      main_weatherContent_forcastDIV1 = document.createElement('div'),
      h2Temperature1 = document.createElement('h2'),
      h2Time1 = document.createElement('h2'),
      imgImageIcon1 = document.createElement('img'),
      main_weatherContent_forcastDIV2 = document.createElement('div'),
      h2Temperature2 = document.createElement('h2'),
      h2Time2 = document.createElement('h2'),
      imgImageIcon2 = document.createElement('img'),
      main_weatherContent_forcastDIV3 = document.createElement('div'),
      h2Temperature3 = document.createElement('h2'),
      h2Time3 = document.createElement('h2'),
      imgImageIcon3 = document.createElement('img'),
      main_wrapperDIV1 = document.createElement('div'),
      map = document.createElement('div'),
      mapDIV1 = document.createElement('div'),
      h3Latitude = document.createElement('h3'),
      h3Longitude = document.createElement('h3')
    document.body.appendChild(header);
    document.body.appendChild(figure);
    figure.appendChild(span1);
    figure.appendChild(span2);
    figure.appendChild(span3);
    figure.appendChild(span4);
    figure.appendChild(span5);
    figure.appendChild(span6);
    document.body.appendChild(main);
    header.appendChild(navigation);
    navigation.appendChild(navigation_wrapper);
    navigation_wrapper.appendChild(navigation_functionality);
    navigation_wrapper.appendChild(navigation_search);
    navigation_functionality.appendChild(navigation_functionality_refresh)
    navigation_functionality.appendChild(navigation_functionality_language)
    navigation_functionality.appendChild(navigation_functionality_F)
    navigation_functionality.appendChild(navigation_functionality_C)
    navigation_functionality_language.appendChild(option1);
    navigation_functionality_language.appendChild(option2);
    navigation_search.appendChild(search1);
    navigation_search.appendChild(search2);
    main.appendChild(mainSection);
    mainSection.appendChild(main_wrapper);
    main_wrapper.appendChild(main_weatherContent);
    main_wrapper.appendChild(main_wrapperDIV1);
    main_weatherContent.appendChild(main_weatherContent_location);
    main_weatherContent_location.appendChild(main_weatherContent_location_city);
    main_weatherContent_location.appendChild(main_weatherContent_location_time);
    main_weatherContent_location_city.appendChild(h2City);
    main_weatherContent_location_time.appendChild(h2Time);
    main_weatherContent.appendChild(main_weatherContent_weather);
    main_weatherContent_weather.appendChild(main_weatherContent_weatherDIV1);
    main_weatherContent_weatherDIV1.appendChild(h2Temperature);
    main_weatherContent_weatherDIV1.appendChild(imgImageIcon);
    main_weatherContent_weather.appendChild(main_weatherContent_weatherDIV2);
    main_weatherContent_weatherDIV2.appendChild(h3);
    main_weatherContent_weatherDIV2.appendChild(ul);
    ul.appendChild(liFeelsLike);
    ul.appendChild(liWind);
    ul.appendChild(liHumidity);
    ul.id = 'weather-list';
    main_weatherContent.appendChild(main_weatherContent_forcast);
    main_weatherContent_forcast.appendChild(main_weatherContent_forcastDIV1);
    main_weatherContent_forcastDIV1.appendChild(h2Time1);
    main_weatherContent_forcastDIV1.appendChild(h2Temperature1);
    main_weatherContent_forcastDIV1.appendChild(imgImageIcon1);
    main_weatherContent_forcast.appendChild(main_weatherContent_forcastDIV2);
    main_weatherContent_forcastDIV2.appendChild(h2Time2);
    main_weatherContent_forcastDIV2.appendChild(h2Temperature2);
    main_weatherContent_forcastDIV2.appendChild(imgImageIcon2);
    main_weatherContent_forcast.appendChild(main_weatherContent_forcastDIV3);
    main_weatherContent_forcastDIV3.appendChild(h2Time3);
    main_weatherContent_forcastDIV3.appendChild(h2Temperature3);
    main_weatherContent_forcastDIV3.appendChild(imgImageIcon3);
    main_wrapperDIV1.appendChild(map);
    main_wrapperDIV1.appendChild(mapDIV1);
    mapDIV1.appendChild(h3Latitude);
    mapDIV1.appendChild(h3Longitude);
    navigation.className = 'navigation'
    navigation_wrapper.className = 'navigation wrapper'
    navigation_functionality.className = 'navigation-functionality'
    navigation_search.className = 'navigation-search'
    navigation_functionality_refresh.className = 'navigation-functionality-refresh'
    navigation_functionality_language.className = ' navigation-functionality-language'
    navigation_functionality_language.id = 'language'
    navigation_functionality_F.id = 'F'
    navigation_functionality_C.id = 'C'
    navigation_functionality_C.className = 'active'
    option1.innerHTML = 'En'
    option2.innerHTML = 'Ru'
    navigation_functionality_refresh.id = 'refreshImg'
    navigation_functionality_refresh.value = 'Refresh'
    navigation_functionality_refresh.type = 'button'
    navigation_functionality_F.type = 'button'
    navigation_functionality_F.value = 'F'
    navigation_functionality_C.type = 'button'
    navigation_functionality_C.value = 'C'
    search1.type = "search"
    search1.placeholder = "Search city or ZIP"
    search1.id = "search-input"
    search2.type = 'button'
    search2.id = "search-button"
    search2.value = "Search"
    mainSection.className = 'main'
    main_wrapper.className = 'main wrapper'
    main_wrapperDIV1.className = 'main-map'
    main_weatherContent.className = 'main-weatherContent'
    main_weatherContent_location.className = 'main-weatherContent-location'
    main_weatherContent_location.classList.add('animate')
    main_weatherContent_location_city.className = 'main-weatherContent-location-city'
    h2City.id = 'city'
    main_weatherContent_location_time.className = 'main-weatherContent-location-time'
    h2Time.id = 'time'
    main_weatherContent_weather.className = 'main-weatherContent-weather'
    main_weatherContent_weatherDIV1.className = 'main-weatherContent-weather-imgAndTemperature'
    main_weatherContent_weather.classList.add('animate')
    h2Temperature.id = 'temperature'
    imgImageIcon.id = 'imageIcon'
    h3.innerHTML = "Overcast"
    h3.id="description"
    liFeelsLike.id = 'feelsLike'
    liWind.id = 'wind'
    liHumidity.id = 'humidity'
    main_weatherContent_forcast.className = 'main-weatherContent-forcast'
    main_weatherContent_forcastDIV1.className = 'forecast'
    main_weatherContent_forcastDIV2.className = 'forecast'
    main_weatherContent_forcastDIV3.className = 'forecast'
    main_weatherContent_forcastDIV1.classList.add('animate')
    main_weatherContent_forcastDIV2.classList.add('animate')
    main_weatherContent_forcastDIV3.classList.add('animate')
    h2Temperature1.id = "temperature1"
    h2Time1.id = "time1"
    imgImageIcon1.id = 'imageIcon1'
    h2Temperature2.id = "temperature2"
    h2Time2.id = "time2"
    imgImageIcon2.id = 'imageIcon2'
    h2Temperature3.id = "temperature3"
    h2Time3.id = "time3"
    imgImageIcon3.id = 'imageIcon3'
    map.id = 'map'
    map.classList.add('animate')
    mapDIV1.className = 'main-wrapper-geolocation'
    mapDIV1.classList.add('animate')
    h3Latitude.id = 'latitude'
    h3Longitude.id = 'longitude'
    latitude = document.querySelector('#latitude')
    longitude = document.querySelector('#longitude')
    temperature = document.querySelector("#temperature")
    imageIcon = document.querySelector("#imageIcon")
    feelsLike = document.querySelector("#feelsLike")
    wind = document.querySelector("#wind")
    humidity = document.querySelector("#humidity")
    temperature1 = document.querySelector("#temperature1")
    imageIcon1 = document.querySelector("#imageIcon1")
    temperature2 = document.querySelector("#temperature2")
    imageIcon2 = document.querySelector("#imageIcon2")
    temperature3 = document.querySelector("#temperature3")
    imageIcon3 = document.querySelector("#imageIcon3")
    city = document.querySelector("#city")
    time = document.querySelector("#time")
    time1 = document.querySelector("#time1")
    time2 = document.querySelector("#time2")
    time3 = document.querySelector("#time3")
    C = document.querySelector("#C")
    F = document.querySelector("#F")
    imageIcon = document.querySelector("#imageIcon")
    description = document.querySelector("#description")
  }
  