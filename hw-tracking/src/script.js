const listEl = document.getElementById('studentsList');

const studentTemplate = document.getElementById('studentTemplate').innerHTML;
const markTemplate = document.getElementById('markTemplate').innerHTML;

let list = [];

init();

function init() {
    API.getStudents().then(setData).then(renderList);
}

function setData(data) {
    return (list = data);
}

function renderList(data) {
    listEl.innerHTML = data.map(getItemElementHtml).join('');
}

function getItemElementHtml(item) {
    return studentTemplate
        .replace('{{id}}', item.id)
        .replace('{{name}}', item.name)
        .replace('{{marks}}', item.marks.map(renderMark).join(''));
}

function renderMark(mark, index) {
    return markTemplate.replace('{{id}}', index).replace('{{value}}', mark);
}
