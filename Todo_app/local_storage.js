let addTaskBtn = document.querySelector("#add-task-btn");
let todoInput = document.querySelector("#taskInput");
let taskList = document.querySelector("#taskList");

// Function to get todos from localStorage
const getTodosFromStorage = () => {
  const todos = localStorage.getItem("todos");
  return todos ? JSON.parse(todos) : [];
};

// Function to save todos to localStorage
const saveTodosToStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// Function to create and add a todo item to the DOM
const createTodo = (text, save = true) => {
  if (text.trim() === "") {
    alert("Enter a Todo..");
    return;
  }

  // Create the <li> element
  let todo = document.createElement("li");
  todo.textContent = text;

  // Create the remove button
  let removeTodo = document.createElement("div");
  removeTodo.setAttribute("id", "remove-Todo");
  removeTodo.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
    <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
  </svg>`;
  todo.append(removeTodo);
  taskList.append(todo);

  // Remove logic
  removeTodo.addEventListener("click", () => {
    todo.remove();
    // Remove from localStorage too
    const currentTodos = getTodosFromStorage().filter((t) => t !== text);
    saveTodosToStorage(currentTodos);
  });

  // If it's a new todo, save it
  if (save) {
    const todos = getTodosFromStorage();
    todos.push(text);
    saveTodosToStorage(todos);
  }
};

// Event: Add task button click
addTaskBtn.addEventListener("click", () => {
  createTodo(todoInput.value);
  todoInput.value = ""; // Clear input after adding
});

// Load saved todos when page loads
window.addEventListener("DOMContentLoaded", () => {
  const todos = getTodosFromStorage();
  todos.forEach((todo) => createTodo(todo, false)); // don't save again on render
});
