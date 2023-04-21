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
//     //조건을 두개 이상 더 할땐 &&을 사용한다. (AND operator 연산자) 조건이 모두 true여야 함.
//     //조건 중 하나만 적용하고 싶을땐 ||을 사용한다. (OR operator 연산자) 조건 중 하나만 true여도 됨.
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



const title = document.getElementById("title");
//document는 html을 뜻함. 하나의 객체 형태를 가지고 있음.
//document. 의 function(기능)으로 html에서 원하는 element를 가져올 수 있다.
//getElementById를 통해 html에서 id="title"을 가져올 수 있음.

title.innerText = "Got you"
//html에 설정된 title내용을 변경.

