import createEmptyMessage from "../commons/EmptyMessage.js";

export default function createSidebarNav({ workspaces }) {
  const sidebarNav = document.createElement("nav");
  sidebarNav.className = "sidebar__nav";

  if (workspaces.length === 0) {
    const emptyMessage = createEmptyMessage("Workspaces is empty!");
    sidebarNav.appendChild(emptyMessage);
    return sidebarNav;
  }

  return sidebarNav;
}
