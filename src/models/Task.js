import Todo from "./Todo.js";
import Collection from "./Collection.js";
import generateId from "../utils/generateId.js";

export default class Task {
	constructor(name, description, dueDate, priority) {
		this.id = generateId("task");
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.todos = new Collection();
	}

	saveTask(name, description, dueDate, priority) {
		const newTodo = new Todo(name, description, dueDate, priority);
		return this.todos.add(newTodo);
	}

	deleteTask(id) {
		this.todos.remove(id);
	}

	get isDone() {
		return this.todos.isDone;
	}
}
