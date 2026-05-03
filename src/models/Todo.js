import generateId from "../utils/generateId.js";

export default class Todo {
	constructor(name, description, dueDate, priority) {
		this.id = generateId("todo");
		this.name = name;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.isDone = false;
	}

	toggleDone() {
		this.done = !this.done;
	}
}
