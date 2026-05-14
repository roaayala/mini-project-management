import createEmptyMessage from "../commons/EmptyMessage";
import createPageHeader from "./PageHeader";
import createPageContent from "./PageContent";

export default function createWorkspacePage({
  workspace,
  actions,
  activeWorkspace,
}) {
  const workspacePage = document.createElement("main");
  workspacePage.className = "page-wrapper";

  if (!activeWorkspace) {
    const emptyMessage = createEmptyMessage("No workspace being active!");
    workspacePage.appendChild(emptyMessage);
    return workspacePage;
  }

  const workspaceHeader = createPageHeader({ workspace });
  workspacePage.appendChild(workspaceHeader);

  const workspaceContent = createPageContent({
    projects: workspace.projects,
    actions,
    emptyMessageText: "Project is empty!",
  });
  workspacePage.appendChild(workspaceContent);

  return workspacePage;
}
