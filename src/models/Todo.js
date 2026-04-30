import generateId from "../utils/generateId.js";

export default class Todo {
	constructor(title, description, dueDate, priority) {
		this.id = generateId("todo");
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;
		this.isDone = false;
	}

	toggleDone() {
		this.done = !this.done;
	}
}
