$(() => {
    const URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers';

    const DELETE_NOTE_SELECTOR = '.delete-note';
    const EDIT_NOTE_CONTROL_CLASS = 'edit-note-control';
    const NOTE_ITEM_SELECTOR = '.note';

    const EMPTY_NOTE = { description: '' };

    const noteTemplate = $('#noteTemplate').html();
    const $fieldElement = $('#field')
        .on('click', DELETE_NOTE_SELECTOR, onDeleteNoteClick)
        .on('focusout', '.' + EDIT_NOTE_CONTROL_CLASS, onFieldElementFocusout);

    $('#addNoteBtn').on('click', onAddNoteBtnClick);
    let notesList = [];

    init();

    function onAddNoteBtnClick() {
        createNote(EMPTY_NOTE);
    }

    function onDeleteNoteClick(e) {
        const $element = $(this).parent();

        $element.fadeOut(1000, () => deleteNote(getElementIndex($element)));
    }

    function onFieldElementFocusout(e) {
        const $element = $(this);

        updateNote(getElementIndex($element), {
            description: $element.val(),
        });
    }

    function init() {
        getList();
    }

    function getList() {
        fetch(URL)
            .then((res) => res.json())
            .then(setData)
            .then(renderList);
    }

    function setData(data) {
        return (notesList = data);
    }

    function getNoteElementById(id) {
        return $fieldElement.find(`[data-note-index="${id}"]`);
    }

    function createNote(note) {
        fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        })
            .then((res) => res.json())
            .then((note) => {
                notesList.push(note);
                renderNote(note);
            });
    }

    function updateNote(id, changes) {
        const note = notesList.find((el) => el.id == id);

        Object.keys(changes).forEach((key) => (note[key] = changes[key]));

        fetch(`${URL}/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(note),
        });
    }

    function deleteNote(id) {
        notesList = notesList.filter((el) => el.id != id);

        deleteNoteElement(id);

        fetch(`${URL}/${id}`, {
            method: 'DELETE',
        });
    }

    function deleteNoteElement(id) {
        const $element = getNoteElementById(id);

        $element && $element.remove();
    }

    function renderList(notesList) {
        notesList.forEach(renderNote);
    }

    function renderNote(note) {
        const $noteElement = $(getNoteHtml(note));

        $fieldElement.append($noteElement);
    }

    function getNoteHtml(note) {
        return noteTemplate
            .replace('{{id}}', note.id)
            .replace('{{description}}', note.description);
    }

    function getNoteElementByChild($child) {
        return $child.closest(NOTE_ITEM_SELECTOR);
    }

    function getElementIndex($el) {
        const $noteItem = getNoteElementByChild($el);
        return $noteItem && $noteItem.data('noteIndex');
    }
});
