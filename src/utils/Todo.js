export default class Todo {
    static newTodo(id, name, done, important) {
        return { id, name, done, important };
    }

    static newList(id, icon, name, todos) {
        return { id, icon, name, todos };
    }
}