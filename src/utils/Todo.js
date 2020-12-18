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
			Todo.newTodo(this.rnd(), '2.2 Todo', false, false),
			Todo.newTodo(this.rnd(), '2.3 Todo', false, false),
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

	static removeList(data, id) {
		return data.filter(item => item.id !== id);
	}
}