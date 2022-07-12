//selctors
var todoinput = document.querySelector(".todo-input");
var todobutton = document.querySelector("#todo");
var todolist = document.querySelector(".todo-list");
console.log(todobutton);
// document.addEventListener("DOMContentLoaded", addTodos);
//FUNCTIONS
todobutton.addEventListener("click", addTodo);

function addTodo(element) {
  element.preventDefault();

  var tododiv = document.createElement("div");
  tododiv.classList.add("todo");
  
  var newtodo = document.createElement("li");
  newtodo.innerText = todoinput.value;
//   newtodo.classList.add("todo element");
  tododiv.appendChild(newtodo);
  
//   saveLocalTodos(todoinput.value);
  
  var completedbutton = document.createElement("button");
  completedbutton.innerHTML = '<i class="fas fa-check"></i>';
//   completedbutton.classList.add("complete button");
  tododiv.appendChild(completedbutton);
  
  var deletebutton = document.createElement("button");
  deletebutton.innerHTML = '<i class="fas fa-trash"></i>';
//   deletebutton.classList.add("delete button");
  tododiv.appendChild(deletebutton);
  
  todolist.appendChild(tododiv);
  todoinput.value = "";
}

