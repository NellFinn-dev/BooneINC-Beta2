function updateClock() {
    const now = new Date();
    
    // time format
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; 
    
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    
    const timeString = `${hours}:${minutes}:${seconds} ${ampm}`;
    document.getElementById('time-display').textContent = timeString;
    
    // date format
    const dateOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dateString = now.toLocaleDateString(undefined, dateOptions);
    document.getElementById('date-display').textContent = dateString;
}

// clock start
updateClock();
setInterval(updateClock, 1000);


// task list
const taskInput = document.getElementById('task-input');
const dateInput = document.getElementById('date-input');
const timeInput = document.getElementById('time-input');
const addBtn = document.getElementById('add-btn');
const taskList = document.getElementById('task-list');

function addTask() {
    const taskText = taskInput.value.trim();
    const dueDate = dateInput.value;
    const dueTime = timeInput.value;
    
    if (taskText === '') {
        alert("Please enter a task!");
        return; 
    }

    const li = document.createElement('li');
    li.className = 'task-item';
    
    const detailsDiv = document.createElement('div');
    detailsDiv.className = 'task-details';
    
    const taskSpan = document.createElement('strong');
    taskSpan.textContent = taskText;
    
    const dateSpan = document.createElement('span');
    dateSpan.className = 'due-date';
    
    if (dueDate || dueTime) {
        dateSpan.textContent = `Due: ${dueDate} ${dueTime}`;
    } else {
        dateSpan.textContent = 'No deadline set';
    }

    detailsDiv.appendChild(taskSpan);
    detailsDiv.appendChild(dateSpan);
    li.appendChild(detailsDiv);
    
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.className = 'delete-btn';
    deleteBtn.onclick = () => li.remove();
    
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    taskInput.value = '';
    dateInput.value = '';
    timeInput.value = '';
}

addBtn.addEventListener('click', addTask);

// enter button
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTask();
});
