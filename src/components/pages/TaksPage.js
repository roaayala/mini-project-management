import createEmptyMessage from "../commons/EmptyMessage";
import createButton from "../commons/Button";
import createPageHeader from "./PageHeader";
import createPageAction from "./PageAction";

export default function createTaskPage({ task, todos, actions }) {
  const taskPage = document.createElement("main");
  taskPage.className = "page-wrapper";

  // HEADER
  const pageHeader = createPageHeader({ item: task });
  taskPage.appendChild(pageHeader);

  // CONTENT
  const taskTodos = todos.filter((todo) => todo.tsId === task.id);
  const pageContent = document.createElement("main");
  pageContent.className = "page-content";

  if (taskTodos.length === 0) {
    const emptyTodos = createEmptyMessage("No todo being added!");
    pageContent.appendChild(emptyTodos);
  } else {
    console.log(taskTodos);
  }

  taskPage.appendChild(pageContent);

  // ACTION
  const pageAction = createPageAction({
    buttonConfig: {
      text: "New Task",
      callback: () => {
        console.log(task.id);
      },
    },
  });
  taskPage.appendChild(pageAction);

  return taskPage;
}
