const addButton = document.getElementById('addButton');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', function() {
    const taskText = taskInput.value;

    if (taskText) {
        const listItem = document.createElement('li');
        listItem.textContent = taskText;

        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.className = 'remove-button';

        removeButton.addEventListener('click', function() {
            taskList.removeChild(listItem);
        });

        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);
        taskInput.value = ''; // Clear the input field
    }
});