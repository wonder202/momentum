const images = [
    "1.jpg",
    "2.jpg",
    "3.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
//배열 길이만큼의 숫자를 랜덤 숫자에 곱해서 소수점 내림 후, 나오게함.

const BGImage = document.createElement("img");
//새로운 태그를 가진 요소를 만드는 function

const background = document.querySelector("#back");
//css에서 img태그 겹침 방지 id부여.

BGImage.src = `img/${chosenImage}`;
//이미지 출처(위치) 지정.

background.appendChild(BGImage)
//.appendChild()는 html body안에 js에서 만들어둔 요소를 추가해주는 function