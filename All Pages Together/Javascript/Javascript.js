function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', { hour12: true, hour: 'numeric', minute: '2-digit', second: '2-digit' });
    document.getElementById('time-display').textContent = timeString;
    const dateString = now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    document.getElementById('date-display').textContent = dateString;
}

updateClock();
setInterval(updateClock, 1000);

const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    if (!taskText) return alert("Please enter a task!");
    
    const dueDate = dateInput.value;
    const dueTime = timeInput.value;
    const deadline = dueDate || dueTime ? `Due: ${dueDate} ${dueTime}` : 'No deadline set';
    
    const li = document.createElement('li');
    li.className = 'task-item';
    li.innerHTML = `
        <div class="task-details">
            <strong>${taskText}</strong>
            <span class="due-date">${deadline}</span>
        </div>
        <button class="delete-btn" onclick="this.parentElement.remove()">Delete</button>
    `;
    taskList.appendChild(li);
    
    taskInput.value = dateInput.value = timeInput.value = '';
}

addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keypress', e => e.key === 'Enter' && addTask());
