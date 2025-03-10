// DOM elements
const taskInput = document.getElementById('task-input');
const addTaskBtn = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');


function addTask() {  //  add a new task
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // new list item
  const taskItem = document.createElement('li');
  taskItem.className = 'task-item';

  // Add the task text
  const taskTextNode = document.createTextNode(taskText);
  taskItem.appendChild(taskTextNode);

  // Add a remove button
  const removeBtn = document.createElement('button');
  removeBtn.className = 'remove-task-btn';
  removeBtn.textContent = 'Remove';
  removeBtn.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskItem.appendChild(removeBtn);

  // Add the task to the list
  taskList.appendChild(taskItem);

  // Clear the input field
  taskInput.value = '';
}

// Event listener for the "Add Task" button
addTaskBtn.addEventListener('click', addTask);

// Optional: Allow pressing "Enter" to add a task
taskInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    addTask();
  }
});