const USER_URL = 'https://api.github.com/users/';
const userInfoTemplate = document.querySelector('#userInfoTemplate').innerHTML;
const userContainer = document.querySelector('#userContainer');

document
    .querySelector('#searchForm')
    .addEventListener('submit', onSearchFormSubmit);

function onSearchFormSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.searchInput.value;
    if (isUsernameValid(username)) {
        showUserInfo(username);
    } else {
        alert('Username is invalid');
    }
}

function isUsernameValid(username) {
    return !!username && username.length > 3;
}

function showUserInfo(username) {
    fetchUserData(username).then(renderUserData);
}

function fetchUserData(username) {
    return fetch(USER_URL + username)
        .then((resp) => {
            if (resp.ok) {
                return resp.json();
            }

            if (resp.status > 500) {
                return alert('Server Error');
            }

            if (resp.status > 400) {
                throw alert('Bad request');
            }
        })
        .catch((err) => {
            alert(err);
        });
}

function renderUserData(user) {
    if (user) {
        userContainer.innerHTML = userInfoTemplate
            .replace('{{name}}', user.name)
            .replace('{{login}}', user.login)
            .replace('{{html_url}}', user.html_url)
            .replace('{{avatar_url}}', user.avatar_url)
            .replace('{{public_repos}}', user.public_repos)
            .replace('{{followers}}', user.followers)
            .replace('{{registration}}', formatDate(user.created_at));
    } else {
        userContainer.innerHTML = '';
    }
}

function formatDate(created_at) {
    const d = new Date(created_at);

    return `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`;
}
