export default class Todo {

	static rnd() {
		return Math.random();
	}

	static todos = [
		Todo.newList(this.rnd(), 'home', 'First List', [
			Todo.newTodo(this.rnd(), '1.1 Todo', false, false),
			Todo.newTodo(this.rnd(), '1.2 Todo', false, false),
			Todo.newTodo(this.rnd(), '1.3 Todo', false, false),
		]),
		Todo.newList(this.rnd(), 'star', 'Second List', [
			Todo.newTodo(this.rnd(), '2.1 Todo', false, false),
			Todo.newTodo(this.rnd(), '2.2 Todo', false, true),
			Todo.newTodo(this.rnd(), '2.3 Todo', false, false),
			Todo.newTodo(this.rnd(), '2.4 Todo', false, false),
			Todo.newTodo(this.rnd(), '2.5 Todo', false, true),
			Todo.newTodo(this.rnd(), '2.6 Todo', false, false),
		]),
		Todo.newList(this.rnd(), 'cash', 'Third List', [
			Todo.newTodo(this.rnd(), '3.1 Todo', false, false),
			Todo.newTodo(this.rnd(), '3.2 Todo', false, false),
			Todo.newTodo(this.rnd(), '3.3 Todo', false, false),
		]),
		Todo.newList(this.rnd(), 'create', 'Fourth List', [
			Todo.newTodo(this.rnd(), '4.1 Todo', false, false),
			Todo.newTodo(this.rnd(), '4.2 Todo', false, false),
			Todo.newTodo(this.rnd(), '4.3 Todo', false, false),
		]),
	];

	static newList(id, icon, name, todos) {
		return { id, icon, name, todos };
	}

	static newTodo(id, name, done, important) {
		return { id, name, done, important };
	}

	static addList(data, list) {
		return [...data, list];
	}

	static addTodo(data, todo) {
		const todoList = [...data.todos, todo];
		return { ...data, todos: todoList };
	}

	static insertTodo(data, id, todo) {
		return data.map((item) => {
			if (item.id === id) {
				return { ...todo };
			} else return item;
		});
	}

	static removeTodo(list, id) {
		return { ...list, todos: list.todos.filter(item => item.id !== id) };
	}

	static removeList(data, id) {
		return data.filter(item => item.id !== id);
	}

	static getList(data, id) {
		for (let i = 0; i < data.length; i++) {
			if (data[i].id === id)
				return data[i];
		}
	}

	static replaceList(data, list) {
		return data.map(item => item.id === list.id ? list : item);
	}

	static editTodo(list, id, name, done, important) {
		const newTodo = { ...list, todos: list.todos.map(item => item.id === id ? Todo.newTodo(id, name, done, important) : item) };
		return newTodo;
	}
}