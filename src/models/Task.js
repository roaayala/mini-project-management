export default class Task {
  constructor({ id, pId, createdAt, name, description, dueDate, priority }) {
    this.id = id;
    this.pId = pId;
    this.createdAt = createdAt;
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
  }
}
