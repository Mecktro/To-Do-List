document.addEventListener('DOMContentLoaded', () => {
  const taskInput = document.getElementById('taskInput');
  const addTaskBtn = document.getElementById('addTaskBtn');
  const taskList = document.getElementById('taskList');

  // Load tasks from local storage
  loadTasks();

  // Add task functionality
  addTaskBtn.addEventListener('click', () => {
    const task = taskInput.value.trim();
    if (task) {
      addTask(task);
      taskInput.value = ''; // Clear input field
    }
  });

  // Function to load tasks from local storage
  function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.forEach(task => {
      const taskElement = createTaskElement(task);
      taskList.appendChild(taskElement);
    });
  }

  // Function to add a task
  function addTask(task) {
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);

    // Save to local storage
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // Function to create a task element
  function createTaskElement(task) {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="removeTask('${task}')">Delete</button>
    `;
    return li;
  }

  // Function to remove a task
  window.removeTask = function(task) {
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const updatedTasks = tasks.filter(t => t !== task);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));

    // Remove the task from the UI
    const taskItems = Array.from(taskList.getElementsByTagName('li'));
    taskItems.forEach(item => {
      if (item.firstElementChild.textContent === task) {
        taskList.removeChild(item);
      }
    });
  };
});
