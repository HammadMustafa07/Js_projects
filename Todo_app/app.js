let todo_container = document.querySelector(".todo-container");
let input = document.querySelector("#taskInput");
let addTaskBtn = document.querySelector("#add-task-btn");
let taskList = document.querySelector("#taskList");

let addTask = () => {
  if (input.value.trim() === "") return;

  // Create new li element for the task
  let li = document.createElement("li");
  li.innerHTML = input.value;

  // Create delete button
  let delete_todo = document.createElement("button");
  delete_todo.classList.add("delete-todo");
  delete_todo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
  </svg>`;

  // Attach delete functionality to the delete button
  delete_todo.addEventListener("click", () => {
    li.remove();
  });

  // Append delete button to li and li to the task list
  li.append(delete_todo);
  taskList.append(li);

  // Clear input field after adding task
  input.value = "";
};

// Attach the addTask function to the Add Task button click event
addTaskBtn.addEventListener("click", addTask);






























// let todo_container = document.querySelector(".todo-container");
// let input = document.querySelector("#taskInput");
// let addTaskBtn = document.querySelector("#add-task-btn");
// let taskList = document.querySelector("#taskList");



// let addTask = () => {
//   if (input.value.trim() === "") return;
//   let li = document.createElement("li");
//   li.innerHTML = input.value;
//   taskList.append(li);
//   input.value = "";
//   let delete_todo = document.createElement("button")
//   delete_todo.classList.add("delete-todo")
//   delete_todo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
//     <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
//     <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
//   </svg>`;
//   li.append(delete_todo);
// };



// addTaskBtn.addEventListener("click", addTask);


// delete_todo.addEventListener("click", () => {
//   li.remove();
// });
