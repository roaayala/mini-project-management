import Workspace from "./Workspace.js";
import Collection from "./Collection.js";
import generateId from "../utils/generateId.js";

export default class App {
	constructor() {
		this.workspaces = new Collection();
	}

	saveWorkspace(name, description) {
		const newWorkspace = new Workspace(name, description);
		return this.workspaces.save(newWorkspace);
	}

	deleteWorkspace(id) {
		this.workspaces.delete(id);
	}

	get isDone() {
		return this.workspaces.isDone;
	}
}
