class Todo {
    static todoCount = 0

    constructor(title) {
        this.id = ++Todo.todoCount
        this.title = title
    }
}

export default Todo