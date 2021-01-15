const DONE_CLASS = 'done';
const DELETE_BTN_CLASS = 'delete-btn';
const TASK_ITEM_CLASS = 'task-item';
const TASK_ITEM_SELECTOR = '.' + TASK_ITEM_CLASS;

const taskInput = document.getElementById('taskNameInput');
const taskTemplate = document.getElementById('newTaskTemplate').innerHTML;
const listEl = document.getElementById('taskList');

document.getElementById('newTaskForm').addEventListener('submit', onFormSubmit);
listEl.addEventListener('click', onListClick);

function onFormSubmit(e) {
    e.preventDefault();

    const title = taskInput.value;
    if (isValid(title)) {
        addNewTask(title);
        clearInput();
    } else {
        alert('task is invalid');
    }
}

function onListClick(e) {
    const taskEl = getTaskElement(e.target);

    switch (true) {
        case e.target.classList.contains(DELETE_BTN_CLASS):
            return deleteTask(taskEl);
        case e.target.classList.contains(TASK_ITEM_CLASS):
            return toggleTask(taskEl);
    }
}

function isValid(text) {
    return !!text;
}

function addNewTask(title) {
    const newTaskHtml = getTaskHtml(title);

    listEl.insertAdjacentHTML('beforeend', newTaskHtml);
}

function getTaskHtml(title) {
    return taskTemplate.replace('{{text}}', title);
}

function clearInput() {
    taskInput.value = '';
}

function getTaskElement(el) {
    return el.closest(TASK_ITEM_SELECTOR);
}

function toggleTask(el) {
    el.classList.toggle(DONE_CLASS);
}

function deleteTask(el) {
    el.remove();
}
