const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');

function addTask() {
  const task = inputBox.value.trim();
  if (!task) {
    alert("Please write down a task");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    <label>
      <input type="checkbox">
      <span>${task}</span>
    </label>
    <span class="edit-btn">Edit</span>
    <span class="delete-btn">Delete</span>
  `;

  // Add event listeners to Edit and Delete buttons
  const editButton = li.querySelector('.edit-btn');
  const deleteButton = li.querySelector('.delete-btn');
  
  editButton.addEventListener('click', () => editTask(li));
  deleteButton.addEventListener('click', () => deleteTask(li));

  listContainer.appendChild(li);
  inputBox.value = "";  
}

function editTask(taskItem) {
  const span = taskItem.querySelector('label span');
  const newTask = prompt("Edit your task:", span.textContent);

  if (newTask !== null) {
    span.textContent = newTask.trim() || span.textContent; // Avoid empty updates
  }
}

function deleteTask(taskItem) {
  listContainer.removeChild(taskItem);
}
