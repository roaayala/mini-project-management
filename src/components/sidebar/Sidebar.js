import createSidebarHeader from "./SidebarHeader.js";
import createSidebarNav from "./SidebarNav.js";
import createButton from "../commons/Button.js";

export default function createSidebar({
  workspaces,
  actions,
  activeWorkspace,
}) {
  const sidebar = document.createElement("aside");
  sidebar.className = "sidebar";

  // header
  const sidebarHeader = createSidebarHeader();
  sidebar.appendChild(sidebarHeader);

  // content
  const sidebarNav = createSidebarNav({ workspaces });
  sidebar.appendChild(sidebarNav);

  // actions
  const sidebarAction = document.createElement("div");
  sidebarAction.className = "sidebar__action";

  const addButton = createButton({ text: "New Workspace" });
  sidebarAction.appendChild(addButton);

  sidebar.appendChild(sidebarAction);

  return sidebar;
}
