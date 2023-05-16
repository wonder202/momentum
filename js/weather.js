const API_KEY ="92425b86e05ef84a7be41b633b7fe023";

function onGeoOK(position){ //js의 위치정보 제공을 위한 공간(position)할당
    const lat = position.coords.latitude; //위도
    const lon = position.coords.longitude; //경도
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:first-child");
        const weather = document.querySelector("#weather span:nth-child(2)");
        const temp = document.querySelector("#weather span:last-child");
        city.innerText = "You're in " + data.name;
        weather.innerText = "It's " + data.weather[0].main;
        temp.innerText = Math.floor(data.main.temp) + "°C";
    });
    //fetch() //js가 대신 원격으로 함수를 호출함으로써 단계를 줄이는 효율적인 방법.
    //fetch()로 응답을 받고 나면 .then()으로 response(json형식)를 받는다.
    //그 다음, .then()으로 받은 데이터를 보여준다.
}

function onGeoERROR(){
    alert("Where the hell are U??")
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoERROR);
