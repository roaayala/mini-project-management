import Todo from "../models/Todo";
import generateId from "../utils/generateId";
import { todayDateString } from "../utils/date";

export default class TodoContoller {
  constructor(todos) {
    this.todos = todos;
  }

  addTodo() {}
  removeTodo(toId) {}
  editTodo(toId) {}
}
