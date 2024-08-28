import { projects } from './project';

function displayProjects() {
    const projectList = document.getElementById('project-list');
    projectList.innerHTML = '';

    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.textContent = project.name;
        projectElement.dataset.index = index;

        // Add delete button for project
        const deleteProjectBtn = document.createElement('button');
        deleteProjectBtn.classList.add("delete")
        deleteProjectBtn.textContent = 'Delete';
        deleteProjectBtn.addEventListener('click', () => {
            projects.splice(index, 1);
            displayProjects();
            document.getElementById('todo-list').innerHTML = '';
        });

        projectElement.appendChild(deleteProjectBtn);
        projectElement.addEventListener('click', () => {
            document.querySelectorAll('#project-list div').forEach((el) => el.classList.remove('selected'));
            projectElement.classList.add('selected');
            displayTodos(project);
        });

        projectList.appendChild(projectElement);
    });
}

function displayTodos(project) {
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';

    project.todos.forEach((todo, index) => {
        const todoElement = document.createElement('div');
        todoElement.classList.add('todo-item');

        // Add checkbox for completion
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.classList.add("checkbox")
        checkbox.checked = todo.completed || false;
        checkbox.addEventListener('change', () => {
            todo.completed = checkbox.checked;
        });

        // Title and due date
        const todoInfo = document.createElement('span');
        todoInfo.textContent = `${todo.title} - ${todo.dueDate}`;

        // Expandable details
        const details = document.createElement('div');
        details.classList.add("to-do-details")
        details.classList.add('todo-details');
        details.innerHTML = `
            <p>Description: ${todo.description}</p>
            <p>Priority: ${todo.priority}</p>
            <p>Notes: ${todo.notes}</p>
        `;
        details.style.display = 'none';

        todoInfo.addEventListener('click', () => {
            details.style.display = details.style.display === 'none' ? 'block' : 'none';
        });

        // Delete and Edit buttons
        const deleteTodoBtn = document.createElement('button');
        deleteTodoBtn.classList.add("delete")
        deleteTodoBtn.textContent = 'Delete';
        deleteTodoBtn.addEventListener('click', () => {
            project.todos.splice(index, 1);
            displayTodos(project);
        });



        todoElement.appendChild(checkbox);
        todoElement.appendChild(todoInfo);
        todoElement.appendChild(details);

        todoElement.appendChild(deleteTodoBtn);
        todoList.appendChild(todoElement);
    });
}

export { displayProjects, displayTodos };
