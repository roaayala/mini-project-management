import Project from "./Project.js";
import Collection from "./Collection.js";
import generateId from "../utils/generateId.js";

export default class Workspace {
	constructor(name, description) {
		this.id = generateId("workspace");
		this.name = name;
		this.description = description;

		this.projects = new Collection();
	}

	addProject(name, description, dueDate, priority) {
		const newProject = new Project(name, description, dueDate, priority);
		return this.projects.add(newProject);
	}

	removeProject(id) {
		this.projects.remove(id);
	}

	get isDone() {
		return this.projects.isDone;
	}
}
