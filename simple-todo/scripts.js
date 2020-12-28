const taskInput = document.getElementById('taskNameInput');
const listEl = document.getElementById('taskList');

document.getElementById('addTaskBtn').addEventListener('click', onAddBtnClick);

// addNewTask('Hello world from script');

function onAddBtnClick() {
    addNewTask(taskInput.value);
    clearInput();
}

function addNewTask(title) {
    const taskEl = document.createElement('div');
    taskEl.className = 'task-item u-full-width';
    taskEl.textContent = title;
    listEl.append(taskEl);
}

function clearInput() {
    taskInput.value = '';
}
