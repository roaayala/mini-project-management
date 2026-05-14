import createSidebar from "./sidebar/Sidebar.js";
import createMainPanel from "./main-panel/MainPanel";

export default function createMainLayout(workspaces, actions, activeWorkspace) {
  const container = document.createElement("div");
  container.className = "container";

  const sidebar = createSidebar({ workspaces, actions, activeWorkspace });
  container.appendChild(sidebar);

  const workspace = workspaces.find(
    (workspace) => workspace.id === activeWorkspace,
  );

  const mainPanel = createMainPanel({ workspace, actions, activeWorkspace });
  container.appendChild(mainPanel);

  return container;
}
