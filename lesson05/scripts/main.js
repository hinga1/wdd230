document.addEventListener('DOMContentLoaded', function() {
    const input = document.querySelector('#favchap');
    const addButton = document.querySelector('button');
    const list = document.querySelector('#list');

    addButton.addEventListener('click', function() {
        if (input.value.trim() !== '') {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            li.textContent = input.value;
            deleteButton.textContent = '❌';
            li.appendChild(deleteButton);
            list.appendChild(li);
            input.value = ''; // Clear the input field
            input.focus(); // Set focus back to the input
            deleteButton.addEventListener('click', function() {
                list.removeChild(li);
                input.focus(); // Set focus back to the input after deletion
            });
        }
    });
});
