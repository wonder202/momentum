const todoForm  = document.getElementById("todo-form"); //아래와 같음
const todoList  = document.querySelector("#todo-list"); //위와 같음
const todoInput = todoForm.querySelector("input");
const TODOS_KEY = "todos"
let todos       = []; //변경 가능한 변수.최종 array

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

//화면에 그려주기
function createToDo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text; //obj전체가 아닌 text만 그려지도록함.

    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);

    li.appendChild(span); // li안에 span을 자식요소로 넣음.
    li.appendChild(button);
    todoList.appendChild(li);
}

function handleToDoSubmit(event){
    event.preventDefault();
    const newToDo = todoInput.value; //변수값을 복사
    todoInput.value = "";

    const newToDoObj = {
        text : newToDo,
        id   : Date.now(),
    } //item을 특정하기위해 object형식으로 id를 부여.

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