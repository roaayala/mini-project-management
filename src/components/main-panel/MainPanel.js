export default function createMainPanel({ workspaces, activeWorkspace }) {
  const mainPanel = document.createElement("main");
  mainPanel.className = "main-panel";

  if (workspaces.length === 0) {
    mainPanel.textContent = "You dont own any workspace";
    return mainPanel;
  }

  if (!activeWorkspace) {
    mainPanel.textContent = "No workspace selected";
    return mainPanel;
  }

  mainPanel.textContent = activeWorkspace;

  //

  return mainPanel;
}
