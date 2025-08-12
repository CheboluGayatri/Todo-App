document.addEventListener('DOMContentLoaded', function() {
    const todoInput = document.getElementById('todo-input');
    const todoList = document.getElementById('todo-list');
    const form = document.querySelector('form');

    // Add todo on form submit
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const value = todoInput.value.trim();
        if (value) {
            addTodo(value);
            todoInput.value = '';
        }
    });

    // Add todo item to the list
    function addTodo(text) {
        const id = 'todo-' + Date.now();
        const li = document.createElement('li');
        li.className = 'todo';
        li.innerHTML = `
            <input type="checkbox" id="${id}">
            <label class="custom-checkbox" for="${id}">
            <img src="icons/download_done_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
             width="22" height="22"
             alt="Bold checkmark symbol indicating a completed to-do item in a simple and modern task list interface, surrounded by other task management elements.">
            </label>
            <label for="${id}" class="todo-text">${text}</label>
            <button class="delete-button" title="Delete">
            <img src="icons/delete_24dp_1F1F1F_FILL0_wght400_GRAD0_opsz24.svg"
             width="24" height="24"
             alt="Trash can icon representing the option to remove a task from a clean and organized to-do list.">
            </button>
        `;
        todoList.appendChild(li);
    }

    // Handle delete and complete
    todoList.addEventListener('click', function(e) {
        if (e.target.closest('.delete-button')) {
            e.target.closest('li.todo').remove();
        }
        if (e.target.matches('input[type="checkbox"]')) {
            const li = e.target.closest('li.todo');
            li.classList.toggle('completed', e.target.checked);
            const checkboxIcon = li.querySelector('.custom-checkbox img');
            if (checkboxIcon) {
                checkboxIcon.style.display = e.target.checked ? 'inline' : 'none';
            }
        }
    });
});
