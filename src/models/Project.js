export default class Project {
  constructor(id, wsId, name, description, dueDate, priority) {
    this.id = id;
    this.wsId = wsId;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
