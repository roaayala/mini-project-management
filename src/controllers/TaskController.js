import Task from "../models/Task";
import generateId from "../utils/generateId";
import { todayDateString } from "../utils/date";

export default class TaskController {
  constructor(tasks) {
    this.tasks = tasks;
  }

  addTask() {}
  removeTasksByParentId(pId) {}
  removeTask(tsId) {}
  editTask(tsId) {}
}
