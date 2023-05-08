const todoForm = document.getElementById("todo-form"); //아래와 같음
const todoList = document.querySelector("#todo-list"); //위와 같음
const todoInput = todoForm.querySelector("input");

function deleteToDo(event){
    const deleteOne = event.target.parentElement; //클릭이벤트하면 부모요소를 가진 목록 중 하나를 타겟팅
    deleteOne.remove(); //선택한 목록 삭제
    // console.dir(event.target.parentElement.innerText);//어떤 버튼인지 text를 타겟팅해서 출력
}

function createToDo(todo){
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = todo;

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
    createToDo(newToDo);
}
todoForm.addEventListener("submit", handleToDoSubmit);