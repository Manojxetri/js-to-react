let tasks = [];

const input = document.getElementById("todo-input");
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list");

function renderTasks() {

  todoList.innerHTML = "";

  
  tasks.map((task, index) => {
    const li = document.createElement("li");

   
    const taskText = document.createElement("span");
    taskText.textContent = task.text;

    if (task.completed) {
      taskText.classList.add("completed");
    }

    
    taskText.onclick = () => {
      task.completed = !task.completed;
      renderTasks();
    };

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "delete";

    deleteButton.onclick = () => {
      tasks = tasks.filter((_, i) => i !== index);
      renderTasks();
    };

    li.appendChild(taskText);
    li.appendChild(deleteButton);
    todoList.appendChild(li);
  });
}

addButton.onclick = () => {
  const text = input.value.trim();
  if (text !== "") {
    tasks.push({ text: text, completed: false });
    input.value = "";
    renderTasks();
  }
};

input.onkeypress = (e) => {
  if (e.key === "Enter") {
    addButton.click();
  }
};
