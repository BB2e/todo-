const api_key = 'e7205a985030973766539317d495b736' 

let onGetGe = (position) => {
    console.log('위치 확인 완료');
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log(lat, lng)

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${api_key}&units=metric`;
    fetch(url).then(res => res.json()).then(data =>{
        const city = document.querySelector('#weather span:first-child');
        const weather = document.querySelector('#weather span:last-child');

        city.innerText = `${data.name}, `;
        weather.innerText = data.weather[0].main;
    });
}

let onFailGE = (position) => {
    alert('위치 확인 불가');
}

navigator.geolocation.getCurrentPosition(onGetGe, onFailGE);