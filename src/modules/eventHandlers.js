import { createProject, addTodoToProject, projects } from './project';
import { createTodo } from './todo';
import { displayProjects, displayTodos } from './dom';

function setupFormToggles() {
    const showProjectFormBtn = document.getElementById('show-project-form');
    const projectFormContainer = document.getElementById('project-form-container');
    const todoFormContainer = document.getElementById('todo-form-container');
    const cancelProjectFormBtn = document.getElementById('cancel-project-form');
    const cancelTodoFormBtn = document.getElementById('cancel-todo-form');

    showProjectFormBtn.addEventListener('click', () => {
        projectFormContainer.style.display = 'block';
        todoFormContainer.style.display = 'none';
    });

    const projectForm = document.getElementById('project-form');
    projectForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const projectNameInput = document.getElementById('project-name');
        const projectName = projectNameInput.value.trim();

        if (projectName) {
            const newProject = createProject(projectName);
            projects.push(newProject);
            projectNameInput.value = '';
            projectFormContainer.style.display = 'none';

            displayProjects();
            updateProjectSelect();
            todoFormContainer.style.display = 'block';
        }
    });

    const todoForm = document.getElementById('todo-form');
    todoForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const projectSelect = document.getElementById('project-select');
        const projectIndex = projectSelect.value;
        const project = projects[projectIndex];

        if (project) {
            const todoTitle = document.getElementById('todo-title').value.trim();
            const todoDesc = document.getElementById('todo-desc').value.trim();
            const todoDate = document.getElementById('todo-date').value;
            const todoPriority = document.getElementById('todo-priority').value;

            if (todoTitle && todoDesc && todoDate && todoPriority) {
                const newTodo = createTodo(todoTitle, todoDesc, todoDate, todoPriority);
                addTodoToProject(project, newTodo);
                todoForm.reset();
                displayTodos(project);
            }
        }
    });

    cancelProjectFormBtn.addEventListener('click', () => {
        projectFormContainer.style.display = 'none';
    });

    cancelTodoFormBtn.addEventListener('click', () => {
        todoFormContainer.style.display = 'none';
    });
}

function updateProjectSelect() {
    const projectSelect = document.getElementById('project-select');
    projectSelect.innerHTML = '';

    projects.forEach((project, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = project.name;
        projectSelect.appendChild(option);
    });
}

export { setupFormToggles, updateProjectSelect };
