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

// //Object 설명
// const playerName = "bennie";
// const playerPoints = 100;
// const playerHandsome = true;
// const playerJob = "Warrior";

// const player = ["bennie", 100, true, "Warrior"];

// const player = { //object 생성
//     //object 안에 선언되는 변수와 값
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

// //function 만드는 법
// function sayHello(nameOfPerson, age){
//     console.log("hello my name is " + nameOfPerson + " and I'm " + age);
// }
// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 25);

// function love(whatever, whatever1){ //function(기능) 선언과 주어지는 변수명
//     //선언된 변수는 function 밖을 벗어날 수 없음
//     //function 블록 안에서만 존재함
//     console.log(whatever + whatever1); //하고자 하는 기능
// }
// function divide(a, b){
//     console.log(a / b);
// }
// //plus(whatever, whatever1);
// love("bennie S", "2 karina"); //실행코자하는 function과 그 안의 변수 값 주기
// divide(98, 25);

// object안에 function을 선언하는 경우
// const player = {
//     name: "bennie",
//     sayHello: function(otherPersonsName){
//         console.log("hello " + otherPersonsName);
//     },
// };
// // console.log(player.name);
// player.sayHello("Lynn");

