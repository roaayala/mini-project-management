export default class Todo {
  constructor({ id, tsId, createdAt, name, description, dueDate, priority }) {
    this.id = id;
    this.tsId = tsId;
    this.createdAt = createdAt;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.isDone = false;
  }
}
