import createSidebar from "./sidebar/Sidebar.js";
import createWorkspacePage from "./pages/WorkspacePage.js";

export default function createMainLayout(models, actions, activeWorkspace) {
  const container = document.createElement("div");
  container.className = "container";

  const sidebar = createSidebar({
    workspaces: models.workspaces,
    actions,
    activeWorkspace,
  });
  container.appendChild(sidebar);

  const workspace = models.workspaces.find(
    (workspace) => workspace.id === activeWorkspace,
  );

  const projects = models.projects.filter(
    (project) => project.wsId === activeWorkspace,
  );

  const workspacePage = createWorkspacePage({
    workspace,
    projects,
    actions,
    activeWorkspace,
  });
  container.appendChild(workspacePage);

  return container;
}
