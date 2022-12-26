//select all the necessary elements
const input = document.getElementById("todo_input");
const MainTodo = document.getElementById("todos");
const addingButton = document.getElementById("btn");
addingButton.addEventListener("click", function (e) {
  //create all the element
  if (input.value.trim()) {
    //ul tag
    var ultag = document.createElement("ul");
    ultag.classList.add("todo-list-container");

    //todo list div
    var todoList = document.createElement("div");
    todoList.classList.add("todo-list");

    //li tag
    var litag = document.createElement("li");
    litag.innerHTML = input.value;
    litag.classList.add("todo-item");

    //button div
    var buttonDiv = document.createElement("div");
    buttonDiv.classList.add("button");

    //complete button element
    var completeButton = document.createElement("button");
    completeButton.classList.add("completed");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';

    //edit button element
    var editBtn = document.createElement("button");
    editBtn.classList.add("editBtn");
    editBtn.innerHTML = '<i class="far fa-edit"></i>';
    editBtn.onclick = function () {
      editWorking(litag);
    };

    //trash button element
    var trashButton = document.createElement("button");
    trashButton.classList.add("trash");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';

    //Appending elements into each other
    ultag.appendChild(todoList);
    todoList.appendChild(litag);
    todoList.appendChild(buttonDiv);
    buttonDiv.appendChild(completeButton);
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(trashButton);

    //Append all the element in main div
    MainTodo.appendChild(ultag);

    //complete and trash button working
    todoList.addEventListener("click", function (e) {
      var items = e.target;
      if (items.classList[0] === "completed") {
        var todo = items.parentElement;
        var todo2 = todo.parentElement;
        todo2.classList.add("line-through");
      } else if (items.classList[0] === "trash") {
        var todo = items.parentElement;
        var todo2 = todo.parentElement;
        var todo3 = todo2.parentElement;
        todo3.classList.add("fall");
        todo3.addEventListener("transitionend", function () {
          todo3.remove();
        });
      }
    });
    //when the add button click clear the input value
    input.value = "";
  } else if (input.value === "") {
    alert("Please fill the input field");
  }
});
function editWorking(e) {
  var editValue = prompt("edit the selected item", e.firstChild.nodeValue);
  e.firstChild.nodeValue = editValue;
}
