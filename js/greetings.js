//명언 예제
const quotes  = [
    {
        quote: '"With great power comes great responsibility."',
        authur: "- Peter Benjamin Parker",
    },
    {
        quote: '"Age is no guarantee of maturity."',
        authur: "- Lawana Blackwell",
    },
    {
        quote: '"You will face many defeats in life, but never let yourself be defeated."',
        authur: "- Maya Angelou",
    },
    {
        quote: '"Turn your wounds into wisdom."',
        authur: "- Oprah Gail Winfrey",
    },
    {
        quote: '"A mind troubled by doubt cannot focus on the course of victory."',
        authur: "- Arthur Golden",
    },
    {
        quote: '"The way to get started is to quit talking and begin doing. "',
        authur: "- Walt Disney",
    },
    {
        quote: '"Tough times never last, but tough people do."',
        authur: "- Robert H. Schuller",
    },
    {
        quote: '"The secret of getting ahead is getting started."',
        authur: "- Mark Twain",
    },
    {
        quote: '"Despite the forecast, live like it’s spring"',
        authur: "- Lilly Pulitzer",
    },
    {
        quote: '"If you focus on what you left behind, you will never see what lies ahead."',
        authur: "- Ratatouille",
    },
];

//명언 변수 및 랜덤 지정
const quote         = document.querySelector("#quote p:first-child");
const authur        = document.querySelector("#quote p:last-child");
const entireQuote   = document.querySelector("#quote");
const todaysQuote   = quotes[Math.floor(Math.random() * quotes.length)];

//todo 변수
const todoForm  = document.getElementById("todo-form"); //아래와 같음
const todoList  = document.querySelector("#todo-list"); //위와 같음
const todoInput = todoForm.querySelector("input");
const TODOS_KEY = "todos"
let todos       = []; //변경 가능한 변수.최종 array

// //submit(데이터전송) 감지와 브라우저기능 해제
const loginForm     = document.querySelector("#login-form");
const loginInput    = document.querySelector("#login-form input");
const logoutButton  = document.querySelector("#log-out");
const logoutSpan    = document.querySelector("#weather span:first-child");
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
    todoForm.classList.remove(HIDDEN_CLASSNAME);
    logoutSpan.classList.remove(HIDDEN_CLASSNAME);
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

//todo list
function saveToDos(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(todos)); //문자열로 저장.
}

function deleteToDo(event){
    const deleteOne = event.target.parentElement; //클릭이벤트하면 부모요소를 가진 목록 중 하나를 타겟팅
    deleteOne.remove(); //클릭한 목록 치우기. db엔 정보가 남아있음.

    //여기서 db에 남아있던 arr정보 중, (삭제)빼고자하는 id를 가진 item을 제외하고 새로운 arr을 만듬. 
    //즉, 덧씌우는 개념.
    todos = todos.filter(savedtodo => savedtodo.id !== parseInt(deleteOne.id));
    saveToDos(); //새로운 arr을 저장시켜줌.
    // console.dir(event.target.parentElement.innerText);//어떤 버튼인지 text를 타겟팅해서 출력
}

//로그아웃
function logout(){
    localStorage.clear();
    location.reload();
}
logoutButton.addEventListener("click", logout);

//화면에 그려주기
function createToDo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text; //obj전체가 아닌 text만 그려지도록함.

    const button = document.createElement("button");
    const check = document.createElement("input");
    check.type = "checkbox"
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(check);
    li.appendChild(span); // li안에 span을 자식요소로 넣음.
    li.appendChild(button);
    todoList.appendChild(li);

    check.addEventListener("change", () => {
        if(check.checked === true){
            span.style.textDecoration = "line-through";
        } 
        else {
            span.style.textDecoration = "";
        }
    })
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = todoInput.value; //변수값을 복사
    todoInput.value = "";

    const newToDoObj = {
        text : newToDo,
        id   : Date.now(),
    } //item을 특정하기위해 object형식으로 id를 부여.
    
    console.log(todos.length)
    if(todos.length >= 5){
        return alert("리스트는 5개까지만 등록 가능합니다.");
    }

    todos.push(newToDoObj); //newToDoObj를 todos변수에 저장.
    createToDo(newToDoObj); //newToDoObj를 화면에 그려주기.
    saveToDos(); //저장하기
}
todoForm.addEventListener("submit", handleToDoSubmit);

// function sayHello(items){ //배열안, 각각의 item에 대한 정보가 하나씩 자동으로 들어감.
//     console.log("this is", items);
//     // 콘솔창 ex)
//     // this is sds
//     // this is d
//     // this is sd
// }

//새로고침 시 저장된 todos 불러오기.
const savedToDos = localStorage.getItem(TODOS_KEY); 
// if(savedToDos !== null){
if(savedToDos){ //localStorage에 목록이 있을 경우.
    const parsedToDos = JSON.parse(savedToDos); //문자열로 저장시킨 것을 다시 배열로 변환하여 가져오기.
    todos = parsedToDos; //기존에 저장된 목록위에 덮어쓰는게 아니라, 추가시킴.

    // parsedToDos.forEach(sayHello); //parsedToDos 배열안의 item 각각에게 function 적용.
    // 위에 만들어준 sayHello와 같은 function 구문을 따로 만들 필요없이 아래와 같이 작성가능. 같은 것임.
    // arrow function이라고 함.
    // parsedToDos.forEach((items) => console.log("this is", items));

    parsedToDos.forEach(createToDo);
}