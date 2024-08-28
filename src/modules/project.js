const projects = [];

function createProject(name) {
    const todos = [];
    return { name, todos };
}

function addTodoToProject(project, todo) {
    project.todos.push(todo);
}

export { projects, createProject, addTodoToProject };
