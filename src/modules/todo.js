function createTodo(title, description, dueDate, priority, notes = '', checklist = [], completed = false) {
    return { title, description, dueDate, priority, notes, checklist, completed };
}

export { createTodo };
