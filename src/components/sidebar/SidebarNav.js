export default function createSidebarNav({ workspaces }) {
  const sidebarNav = document.createElement("nav");
  sidebarNav.className = "sidebar__nav";

  if (workspaces.length === 0) {
    sidebarNav.textContent = "Workspace empty!";
    return sidebarNav;
  }

  return sidebarNav;
}
