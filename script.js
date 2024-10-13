function addTask() {
    const taskInput = document.getElementById('task');
    const durationInput = document.getElementById('duration');
    const tasksList = document.getElementById('tasks');
  
    const taskValue = taskInput.value;
    const durationValue = parseInt(durationInput.value);
  
    if (!taskValue || !durationValue || durationValue <= 0) {
      alert('Please enter a valid task and duration.');
      return;
    }
  
    const timestamp = new Date().toLocaleString();
  
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
      <span class="task">${taskValue}</span>
      <span class="timestamp">${timestamp}</span>
      <span class="timestamp">${durationValue} mins</span>
      <button class="success-btn" onclick="completeTask(this)">Success</button>
      <button class="delete-btn" onclick="deleteTask(this)">Delete</button>
    `;
  
    tasksList.appendChild(taskItem);
  
    taskInput.value = '';
    durationInput.value = '';
  
    setTimeout(() => {
      if (taskItem) {
        alert(`Task "${taskValue}" is not completed within ${durationValue} minutes.`);
      }
    }, durationValue * 60000); // Convert minutes to milliseconds
  }
  
  function deleteTask(button) {
    const taskItem = button.parentElement;
    taskItem.remove();
  }
  
  function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.style.textDecoration = 'line-through';
    button.remove();
  }
  