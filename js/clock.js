const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    // .padStart(n, "string") //string길이에 따라 원하는 문자를 채워 길이를 늘림.
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //인터벌로 인해 1초 공백이 생기므로 먼저 한번 불러준다.
setInterval(getClock, 1000); //시간 설정 개념, 1000 = 1초에 한번
// setTimeout(sayHello, 5000) //시간 설정 개념, 1000 = 1초뒤 한번만
