import createEmptyMessage from "../commons/EmptyMessage";

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

  workspacePage.textContent = activeWorkspace;

  //

  return workspacePage;
}
