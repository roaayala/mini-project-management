import Todo from "../models/Todo";
import generateId from "../utils/generateId";

export default class TaskController {
  constructor(todos) {
    this.todos = todos;
  }

  addTodo() {}
  removeTodosByParentId(tsId) {}
  removeTodo(toId) {}
  editTodo(toId) {}
}
