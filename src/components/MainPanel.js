export default function createMainPanel(workspaces, actions, activeWorkspace) {
	const workspace = actions.getActiveWorkspace(activeWorkspace)[0];

	const mainPanel = document.createElement("main");
	mainPanel.className = "main-panel";

	if (!activeWorkspace) {
		const emptyMessage = document.createElement("span");
		emptyMessage.textContent = "No workspace being selected";
		mainPanel.appendChild(emptyMessage);
	} else {
		const workspaceContainer = document.createElement("div");
		workspaceContainer.className = "workspace";

		const workspaceHeader = document.createElement("header");
		workspaceHeader.className = "workspace-header";

		const workspaceName = document.createElement("h2");
		workspaceName.textContent = workspace.name;

		const workspaceDescription = document.createElement("p");
		workspaceDescription.textContent = workspace.description
			? workspace.description
			: "No description being added";

		workspaceHeader.appendChild(workspaceName);
		workspaceHeader.appendChild(workspaceDescription);

		const workspaceMain = document.createElement("main");
		workspaceMain.className = "workspace-main";

		if (workspace.projects.items.length === 0) {
			const emptyMessage = document.createElement("span");
			emptyMessage.textContent = "No project being added";
			workspaceMain.appendChild(emptyMessage);
		}

		mainPanel.appendChild(workspaceHeader);
		mainPanel.appendChild(workspaceMain);
	}

	return mainPanel;
}
