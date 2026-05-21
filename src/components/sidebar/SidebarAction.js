import createButton from "../commons/Button.js";

export default function createSidebarAction({ actions }) {
  const sidebarAction = document.createElement("div");
  sidebarAction.className = "sidebar__action";

  const addButton = createButton({
    text: "New Project",
    callback: () => {
      actions.showAddProjectDialog();
    },
  });
  sidebarAction.appendChild(addButton);

  return sidebarAction;
}
