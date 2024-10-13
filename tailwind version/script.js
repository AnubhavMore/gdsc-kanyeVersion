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
    taskItem.classList.add('flex', 'justify-between', 'items-center', 'bg-gray-100', 'p-4', 'rounded-lg', 'shadow-md');

    taskItem.innerHTML = `
      <span class="task flex-grow text-gray-800">${taskValue}</span>
      <span class="timestamp text-gray-500 ml-4">${timestamp}</span>
      <button class="success-btn bg-blue-500 text-white mx-3 px-3 py-1 rounded hover:bg-blue-600" onclick="completeTask(this)">Success</button>
      <button class="delete-btn bg-red-500 text-white px-3 py-1 ml-2 rounded hover:bg-red-600" onclick="deleteTask(this)">Delete</button>
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