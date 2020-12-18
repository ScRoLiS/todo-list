export default class Todo {

    static newList(id, icon, name, todos) {
        return { id, icon, name, todos };
    }

    static newTodo(id, name, done, important) {
        return { id, name, done, important };
    }

    static removeList(data, id) {
        return data.filter(item => item.id !== id);
    }
}