import createEmptyMessage from "../commons/EmptyMessage";

export default function createMainPanel({
  workspace,
  actions,
  activeWorkspace,
}) {
  const mainPanel = document.createElement("main");
  mainPanel.className = "main-panel";

  if (!activeWorkspace) {
    const emptyMessage = createEmptyMessage("No workspace being active!");
    mainPanel.appendChild(emptyMessage);
    return mainPanel;
  }

  mainPanel.textContent = activeWorkspace;

  //

  return mainPanel;
}
