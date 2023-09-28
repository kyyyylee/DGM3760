import "./styles.css";

// initial todos
// DO NOT EDIT THIS ARRAY
// You may add props to objects if needed.
let todos = [
  {
    todoID: 0,
    todoText: "Finish Homework",
    todoComplete: false
  },
  {
    todoID: 1,
    todoText: "Walk the dog",
    todoComplete: true
  },
  {
    todoID: 2,
    todoText: "Clean my room",
    todoComplete: false
  }
];

//global scopes
const todoList = document.querySelector(".todoList");
const newBtn = document.getElementById("newBtn");
const pendingTasks = document.querySelector("#pendingTasks");

//prevent repeat todos
function removeChildren(container) {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
}

//User can add todos
newBtn.addEventListener("click", addNewTodo);
function addNewTodo() {
  const newTodoName = document.getElementById("input").value;
  const newTodo = {
    todoID: todos.length,
    todoText: newTodoName,
    todoComplete: false
  };
  todos.push(newTodo);
  removeChildren(todoList);
  populateList(todos);
}

//User can view todos
function populateList(todos) {
  todos.forEach((todo) => {
    const complete = todo.todoComplete ? "done" : "";
    const listItem = `<li class="${complete}">
    ${todo.todoText}
    <span class="editBtn"><i class="fa fa-edit"></i></span>
    <span> <i class="fa fa-trash"></i></span>
  </li>`;
    todoList.insertAdjacentHTML("beforeend", listItem);
  });
  numberLeft();
}

populateList(todos);

//App shows the user number of todos left to complete
function numberLeft() {
  let count = 0;
  for (let i in todos) {
    if (todos[i].todoComplete === false) {
      count++;
    }
  }
  pendingTasks.innerHTML = `You have ${count} pending tasks.`;
  return count;
}

//App can delete (aka clear) all done todos at once.

//User can delete todos
