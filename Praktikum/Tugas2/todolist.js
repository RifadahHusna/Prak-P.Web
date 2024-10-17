let todos = [];

// Fungsi untuk menambahkan to-do baru
function addTodo() {
    const todoInput = document.getElementById('todo-input');
    const todoText = todoInput.value.trim();

    if (todoText !== '') {
        todos.push({ text: todoText, editable: false });
        todoInput.value = '';
        renderTodos();
    }
}

// Fungsi untuk merender to-do list ke dalam HTML
function renderTodos() {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = ''; // Kosongkan dulu list

    todos.forEach((todo, index) => {
        const li = document.createElement('li');

        if (todo.editable) {
            const input = document.createElement('input');
            input.type = 'text';
            input.value = todo.text;
            input.addEventListener('change', (event) => updateTodoText(index, event.target.value));
            li.appendChild(input);
        } else {
            const taskSpan = document.createElement('span');
            taskSpan.classList.add('task');
            taskSpan.textContent = todo.text;
            li.appendChild(taskSpan);
        }

        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit');
        editBtn.textContent = todo.editable ? 'Save' : 'Edit';
        editBtn.onclick = () => toggleEdit(index);
        actionsDiv.appendChild(editBtn);

        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add('delete');
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = () => deleteTodo(index);
        actionsDiv.appendChild(deleteBtn);

        li.appendChild(actionsDiv);
        todoList.appendChild(li);
    });
}

// Fungsi untuk menghapus to-do
function deleteTodo(index) {
    todos.splice(index, 1);
    renderTodos();
}

// Fungsi untuk mengedit to-do
function toggleEdit(index) {
    todos[index].editable = !todos[index].editable;
    renderTodos();
}

// Fungsi untuk memperbarui teks to-do
function updateTodoText(index, newText) {
    todos[index].text = newText;
}

// Event listener untuk tombol Enter saat menambahkan to-do
document.getElementById('todo-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});
