import createPageHeader from "./PageHeader";

export default function createTodoPage({ todo }) {
  const todoPage = document.createElement("main");
  todoPage.className = "page-wrapper";
  console.log(todo);

  const pageHeader = createPageHeader({
    elementConfig: {
      title: true,
      description: true,
      createdAt: true,
      deadline: true,
      priority: true,
    },
    item: todo,
  });
  todoPage.appendChild(pageHeader);

  return todoPage;
}
