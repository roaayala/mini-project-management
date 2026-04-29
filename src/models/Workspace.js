import Project from "./Project.js";

export default class Workspace {
	constructor(title, description, dueDate, priority) {
		this.title = title;
		this.description = description;
		this.dueDate = dueDate;
		this.priority = priority;

		this.projects = [];
	}

	addProject(title, description, dueDate, priority) {
		const newProject = new Project(title, description);
		this.projects = [...this.projects, newProject];

		return newProject;
	}

	get isDone() {
		if (this.projects.length === 0) {
			return false;
		}

		return this.projects.every((project) => project.isDone);
	}
}
