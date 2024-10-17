const inputBox = document.querySelector('#input-box');
const listContainer = document.querySelector('.list-container');

function addTask() {
    if (inputBox.value === '') {
        alert('There is no task.');
    }
    else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        inputBox.value = '';

        let span = document.createElement('span');
        span.innerHTML = '\u00d7';
        li.appendChild(span);
    }
}

listContainer.addEventListener('click', function(e) {
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle('completed');
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
    }
}, false)