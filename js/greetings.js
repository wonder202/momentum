//명언 예제
const quotes  = [
    {
        quote: '"With great power comes great responsibility."',
        authur: "Peter Benjamin Parker",
    },
    {
        quote: '"Age is no guarantee of maturity."',
        authur: "Lawana Blackwell",
    },
    {
        quote: '"You will face many defeats in life, but never let yourself be defeated."',
        authur: "Maya Angelou",
    },
    {
        quote: '"Turn your wounds into wisdom."',
        authur: "Oprah Gail Winfrey",
    },
    {
        quote: '"A mind troubled by doubt cannot focus on the course of victory."',
        authur: "Arthur Golden",
    },
    {
        quote: '"The way to get started is to quit talking and begin doing. "',
        authur: "Walt Disney",
    },
    {
        quote: '"Tough times never last, but tough people do."',
        authur: "Robert H. Schuller",
    },
    {
        quote: '"The secret of getting ahead is getting started."',
        authur: "Mark Twain",
    },
    {
        quote: '"Despite the forecast, live like it’s spring"',
        authur: "Lilly Pulitzer",
    },
    {
        quote: '"If you focus on what you left behind, you will never see what lies ahead."',
        authur: "Ratatouille",
    },
];

//명언 변수 및 랜덤 지정
const quote         = document.querySelector("#quote p:first-child");
const authur        = document.querySelector("#quote p:last-child");
const entireQuote   = document.querySelector("#quote");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// //submit(데이터전송) 감지와 브라우저기능 해제
const loginForm     = document.querySelector("#login-form");
const loginInput    = document.querySelector("#login-form input");
const greeting      = document.querySelector("#greeting");

//반복해서 입력하는 string은 오타가 날 수 있으므로, 변수로 저장해준다.
const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

//로그인 정보 전송 시
function handleLoginSubmit(event){ //event object정보 공간 할당을 위해 (event)를 넣어줌.
    event.preventDefault(); //submit 후 자동으로 새로고침 되는 걸 해제.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);//localStorage에 저장시켜주는 식.
    // localStorage.setItem(USERNAME_KEY, loginInput.value);
    // console.log(event); //발생한 event에 대한 정보(object형태)를 가지고 있음.
    
    paintGreetings(username);
    // paintQuote();
    // paintGreetings();
}
// //링크달기
// function handleLinkClick(event){
//     event.preventDefault(); //link click시 자동으로 이동되는 걸 해제.
//     console.dir(event); //alert보다 위에 와야 정보가 뜸!
// }
// link.addEventListener("click", handleLinkClick);

// 숨겨진 tag출력
// function paintGreetings(){
function paintGreetings(myName){
    // const myName = localStorage.getItem(USERNAME_KEY); //new
    // greeting.innerText = "Hello, " + myName;
    // 위와 같은 결과, 다른 함수
    greeting.innerText = `Nice to meet you, ${myName}`;
    quote.innerText = todaysQuote.quote;
    authur.innerText = todaysQuote.authur;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    entireQuote.classList.remove(HIDDEN_CLASSNAME);
}

// //function을 호출할때, 자동으로 event object를 첫번째 argument(실제값)으로 넘겨준다.
// loginForm.addEventListener("submit", handleLoginSubmit);

// //userName을 localStorage에 저장.
const savedUsername = localStorage.getItem(USERNAME_KEY); //저장된 변수 불러오기.
if(savedUsername === null) {
    //show the loginForm
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);
}
else {
    //show the greetings
    paintGreetings(savedUsername);
    // paintGreetings();
}