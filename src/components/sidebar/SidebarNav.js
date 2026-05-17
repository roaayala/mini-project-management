import createButton from "../commons/Button.js";
import createEmptyMessage from "../commons/EmptyMessage.js";

export default function createSidebarNav({ projects, actions }) {
  const sidebarNav = document.createElement("nav");
  sidebarNav.className = "sidebar__nav";

  if (projects.length === 0) {
    const emptyMessage = createEmptyMessage("Project is empty!");
    sidebarNav.appendChild(emptyMessage);
    return sidebarNav;
  }

  projects.forEach((project) => {
    const navItem = document.createElement("div");
    navItem.className = "sidebar__nav-item";
    navItem.id = project.id;

    const navItemTitle = document.createElement("span");
    navItemTitle.className = "sidebar__nav-item-title";
    navItemTitle.textContent = project.name;
    navItem.appendChild(navItemTitle);

    navItemTitle.addEventListener("click", () => {
      actions.setActiveProject(project.id);
    });

    if (actions.getActiveProject() === project.id) {
      const navItemActions = document.createElement("div");
      navItemActions.className = "sidebar__nav-item-actions";

      const editButton = createButton({
        text: "Edit",
        initialData: project,
        callback: () => {
          actions.showEditProjectDialog(project.id);
        },
      });
      const deleteButton = createButton({
        text: "Delete",
        callback: () => {
          actions.handleRemoveProject(project.id);
        },
      });

      navItemActions.appendChild(editButton);
      navItemActions.appendChild(deleteButton);
      navItem.appendChild(navItemActions);
    }

    sidebarNav.appendChild(navItem);
  });

  return sidebarNav;
}
