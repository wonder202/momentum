// //const와 let의 차이 설명 및 간단한 계산기
// const a = 9;
// const b = 8;
// let myName = "bennie";

// console.log(a+b);
// console.log(a-b);
// console.log("hello " + myName);

// myName = "benedict";

// console.log("Your full name is " + myName);

// const amIFat  = false;
// const amISlim = null;
// let something;
// console.log(something, amIFat);

//---------------------------------------------------------------------------------

// //Array(배열)
// const mon = "Monday";
// const tue = "Tuesday";
// const wed = "Wednesday";
// const thu = "Thursday";
// const fri = "Friday";
// const sat = "Saturday";
// const sun = "Sunday";

// const dayOfWeek = ["mon","tue","wed","thu","fri","sat"];

// console.log(dayOfWeek);

// //배열 추가하기
// dayOfWeek.push("sun");

// //배열 값 바꾸기
// dayOfWeek[0] = "Monday";
// console.log(dayOfWeek);

// console.log(dayOfWeek)

//---------------------------------------------------------------------------------

// //Object(객체) 설명
// const playerName = "bennie";
// const playerPoints = 100;
// const playerHandsome = true;
// const playerJob = "Warrior";

// const player = ["bennie", 100, true, "Warrior"];

// const player = { //object 생성
//     //object(객체)안에 선언되는 properties(변수)와 값
//     name: "bennie",
//     points: 100,
//     handsome: true,
//     job: "Warrior",
// };

// console.log(player);


// //object안에 추가된 변수와 값
// player.lastName = "cucumber";
// //object안에 선언된 변수의 값을 변경
// player.points = player.points + 15;
// console.log(player);

//---------------------------------------------------------------------------------

// //function 만드는 법
// function sayHello(nameOfPerson, age){
//     console.log("hello my name is " + nameOfPerson + " and I'm " + age);
// }
// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 25);

// function love(whatever, whatever1){ //function(기능)선언과 변수선언, 반드시 여기에 먼저 선언 해야함
//     //선언된 변수는 function 밖을 벗어날 수 없음
//     //function 블록 안에서만 존재함
//     console.log(whatever + whatever1); //하고자 하는 기능
// }
// function divide(a, b){ //여기에 변수를 선언하지않으면 function 실행 시 값을 받아올 수 없음
//     console.log(a / b);
// }
// //plus(whatever, whatever1);
// love("bennie S", "2 karina"); //실행코자하는 function과 그 안의 변수 값 주기
// divide(98, 25);

//---------------------------------------------------------------------------------

// object안에 function을 선언하는 경우
// const player = {
//     name: "bennie",
//     sayHello: function(otherPersonsName){
//         console.log("hello " + otherPersonsName);
//     },
// };
// // console.log(player.name);
// player.sayHello("Lynn");

//---------------------------------------------------------------------------------

// // 계산기 만드는 과제
// const calculator = {
//     add: function(a, b){
//         // console.log(a + b);
//         console.log(a + "+" + b, "=", a+b);
//     },
//     minus: function(a, b){
//         // console.log(a - b);
//         console.log(a + "-" + b, "=", a-b);
//     },
//     divide: function(a, b){
//         // console.log(a / b);
//         console.log(a + "/" + b, "=", a/b);
//     },
//     powerof: function(a, b){
//         // console.log(a ** b);
//         console.log(a + "**" + b, "=", a**b);
//     },
// };

// calculator.add(5, 1);
// calculator.minus(120, 54);
// calculator.divide(72, 3);
// calculator.powerof(8, 3);

//---------------------------------------------------------------------------------

// // return 사용법
// const age = 27;

// function calculatorKrAge(ageOfForeigner){
//     return ageOfForeigner + 2;
// };

// const krAge = calculatorKrAge(age);

// console.log(krAge);

//---------------------------------------------------------------------------------

// // 계산기 과제에서 console.log 대신 return으로 대체하기
// // function안에서의 console.log는 단순히 콘솔창을 통해 실행되는 것을 그저 눈으로 보기위함임. 
// // 그 값을 밖으로 빼낼 순 없음.
// // 그러나 return은 function이 실행된 후 실제하는 value값을 남기고 그것을 object밖으로 빼내어 사용할 수 있게 해준다.
// const calculator = {
//     add: function(a, b){
//        return a+b; //return이 수행되면 function의 작동은 끝난다.
//     },
//     minus: function(a, b){
//         return a-b;
//     },
//     divide: function(a, b){
//         return a/b;
//     },
//     powerof: function(a, b){
//         return a**b;
//     },
// };

// const plusResult = calculator.add(3, 5);
// const minusResult = calculator.minus(plusResult, 95);
// //위의 funcion return을 통해 값이 도출되었기때문에 object밖에서도 그 값을 사용할 수 있는 것.
// const divideResult = calculator.divide(12, minusResult);
// const powerofResult = calculator.powerof(divideResult, plusResult);

// console.log(plusResult, minusResult, divideResult, powerofResult);

//---------------------------------------------------------------------------------

// //conditionals(조건문) 1
// const age = parseInt(prompt("몇 살인가요?"));
// // function은 내부에서 외부로 실행된다.
// // 위 예제로 보면 prompt -> parseInt순으로 실행된다.
// // parseInt에 관해서는 메모장 10번 참고.

// const age = prompt("몇 살인가요?");
// // prompt는 더이상 사용하지않는데, 이유는 
// // (1)css적용이 안됨. 
// // (2)모든 브라우저에 적용되지않음.
// // (3)옛날 방식임.

// console.log(typeof age, typeof parseInt(age));
// console.log(age);

// console.log(isNaN(age));
// // isNaN()의 결과는 boolean으로써,
// // is not a number? 숫자가 아닌 것이냐?를 묻는 것. 즉, 숫자이면 false를. 문자면 true를 반환한다.


// //conditionals(조건문) 2 
// //if else 조건문 사용법
// if(isNaN(age)){
//     alert("숫자를 입력하세요.")
// } else{
//     alert("잘했습니다.")
// }


// //conditionals(조건문) 3
// //else if 사용법
// if(isNaN(age) || age < 0){
//     alert("숫자를 제대로 입력하세요.")
// } 
// else if(age < 18){
//     alert("너무 어립니다.")
// } 
// else if(age >= 18 && age <= 50){
//     // 조건을 두개 이상 더 할땐 &&을 사용한다. (AND operator 연산자) 조건이 모두 true여야 함.
//     // 조건 중 하나만 적용하고 싶을땐 ||을 사용한다. (OR operator 연산자) 조건 중 하나만 true여도 됨.
//     alert("술 마실 수 있습니다.")
// }
// else if(age > 50 && age <= 80){
//     alert("건강을 위해 자제하시는게 어떨까요?")
// }
// else if(age > 80 && age < 100){
//     alert("에휴 맘대로 하세요")
// }
// else if(age === 100){
//     alert("와 나이가 3자리네요?")
// }



//---------------------------------------------------------------------------------



// //Elements 찾는 법
// const title = document.getElementById("title");
// // document는 html을 뜻함. 하나의 객체 형태를 가지고 있음.
// // document. 의 function(기능)으로 html에서 원하는 element를 가져올 수 있다.
// // getElementById를 통해 html에서 id="title"을 가져올 수 있음.
// // id="중복불가"

// title.innerText = "Got you"
// // html에 설정된 title내용을 변경.
// // array를 반환하는 function의 경우 사용불가

// const hellos = document.getElementsByClassName("hello");
// // 여러개(배열)을 가져오고 싶을때 쓰는 function

// console.log(hellos);

// const title = document.getElementsByTagName("h1");
// // tag이름을 가진 element를 가져올 수 있는 function
// // array(배열)로 반환.

// console.log(title);

// const title = document.querySelector(".hello h1");
// // css에서 원하는 class안의 tag를 가져올때 사용하는 방법과 유사하다.
// // 같은 className와 tagName을 가진 것이 여러개 있다면 첫번째것만 나온다.
// // .getElementById처럼 id로도 검색이 가능한데, .querySelector("#hello"); 이런 식이다.
// // 즉, 배열이 아닌 하나의 값만 반환.

// const title = document.querySelector(".hello h1:first-child");

// const title = document.querySelectorAll(".hello h1");
// // .querySelectorAll이라는 function을 사용해야 배열로 나옴.



//---------------------------------------------------------------------------------



// // event의 요소에 관해서.
// const h1 = document.querySelector(".hello h1:first-child");

// console.dir(h1);
// // console.dir()했을때 나오는 무수한 요소 중, on~이 붙어있는 요소는 event이다. 
// // .addEventListener로 사용할땐 on떼고.

// function handleTitleClick(){
//     const currentColor = h1.style.color; //현재 색깔
//     let newColor; //새로운 색깔 = 고정적이지 않으므로 let
//     if(currentColor !== "yellow"){ //일치하는지 확인은 ===
//         newColor = "yellow"
//     }
//     else{
//         newColor = "tomato"
//     }
//     h1.style.color = newColor;
//     //if문 과정 후 조건에 따른 최종값을 현재 색 으로 할당.
// };

// function handleMouseEnter(){
//     h1.innerText = "mouse is here";
// };

// function handleMouseLeave(){
//     h1.innerText = "mouse is gone";
// };

// function handleWindowResize(){
//     document.body.style.backgroundColor = "tomato";
//     //document.body는 html의 body 태그를 말함.
// };

// function handleWindowCopy(){
//     alert("copy paste");
// };

// function handleWindowOffline(){
//     alert("SOS");
// };

// function handleWindowOnline(){
//     alert("SAVE");
// };

// // .addEventListener는 유저가 어떤 동작을 수행했을때 그에따른 function 함수의 실행을 대신 해주는 기능.
// h1.addEventListener("click", handleTitleClick);
// // title.onclick = handleTitleClick;
// // 위의 경우 click 이벤트 시 만들어둔 function 함수가 뒤따라 수행되도록 함.

// h1.addEventListener("mouseenter", handleMouseEnter);
// // title.onmouseenter = handleMouseEnter;
// // mouseenter는 마우스를 원하는 위치에 올렸을때 event

// h1.addEventListener("mouseleave", handleMouseLeave);
// // title.onmouseleave = handleMouseLeave;
// // mouseleave는 마우스가 그 위치를 떠났을때 event

// // 위와 같이 두 가지 방법이 있으나,
// // .addEventListener는 나중에 .removeEventListener로 제거도 가능하다.

// window.addEventListener("resize", handleWindowResize);
// //window는 document와 같은 형식인데, 화면 전체를 말한다.
// //화면 사이즈를 바꿀때 발생하는 event

// window.addEventListener("copy", handleWindowCopy);
// //복사를 했을때 발생하는 event

// window.addEventListener("offline", handleWindowOffline);
// window.addEventListener("online", handleWindowOnline);
// //wifi를 on, off 했을때 발생하는 event



//---------------------------------------------------------------------------------



// // css를 통한 style설정
const h1 = document.querySelector(".hello h1:first-child");

//click하면 (html을 통해) css의 className이 clicked인 함수가 실행.
//h1은 초기값이 노란색으로 되어있음.
function handleTitleClick(){
    // const clickedClass = "clicked"
    // string은 오타 등의 이유로 error를 잡기 어려우니 따로 변수에 저장 후 사용.
    // if(h1.classList.contains(clickedClass)){
    //     //className은 html의 class설정을 아예 교체시킴.
    //     //classList는 html의 class설정에 특정class 추가, 제거가 가능.
    //     //.contains()를 통해 포함을 확인.
    //     h1.classList.remove(clickedClass);
    //     //.remove()를 통해 특정 제거.
    //     console.log(h1.className);
    // }
    // else{
    //     h1.classList.add(clickedClass);
    //     //.add()를 통해 class추가.
    //     console.log(h1.className);
    // }

    //*-----위의 복잡한 if else문을 한줄로 만드는 법-----*
    //toggle()은 contains, remove, add를 알아서 다 해준다ㅋ.ㅋ
    //class를 한번만 넣어주면 되니까 굳이 따로 변수 저장할 필요도 없다.
    h1.classList.toggle("clicked");

};

h1.addEventListener("click", handleTitleClick);
