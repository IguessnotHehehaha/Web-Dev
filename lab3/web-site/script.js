const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');
const taskCountElement = document.getElementById('taskCount');
const completedTaskCountElement = document.getElementById('completedTaskCount');
let taskCount = 0;
let completedTaskCount = 0;

function updateTaskCount() {
  taskCountElement.textContent = taskCount;
}

function updateCompletedTaskCount() {
  completedTaskCountElement.textContent = completedTaskCount;
}

function createTaskElement(taskText) {
  const listItem = document.createElement('li');
  listItem.className = 'task-item';

  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';
  checkbox.className = 'task-checkbox';
  checkbox.addEventListener('change', handleCheckboxChange);

  const taskSpan = document.createElement('span');
  taskSpan.className = 'task-text';
  taskSpan.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.className = 'delete-button';
  deleteButton.addEventListener('click', handleDelete);

  listItem.appendChild(checkbox);
  listItem.appendChild(taskSpan);
  listItem.appendChild(deleteButton);

  return listItem;
}

function handleCheckboxChange(event) {
  const listItem = event.target.closest('.task-item');
  if (event.target.checked) {
    listItem.classList.add('done');
    completedTaskCount++;
  } else {
    listItem.classList.remove('done');
    completedTaskCount--;
  }
  updateCompletedTaskCount();
}

function handleDelete(event) {
  const listItem = event.target.closest('.task-item');
  if (listItem.classList.contains('done')) {
    completedTaskCount--;
    updateCompletedTaskCount();
  }
  listItem.remove();
  taskCount--;
  updateTaskCount();
}

function handleFormSubmit(event) {
  event.preventDefault();
  
  const taskText = taskInput.value.trim();
  
  if (taskText === '') {
    return;
  }

  const taskElement = createTaskElement(taskText);
  taskList.appendChild(taskElement);

  taskInput.value = '';
  taskInput.focus();
  taskCount++;
  updateTaskCount();
}

taskForm.addEventListener('submit', handleFormSubmit);