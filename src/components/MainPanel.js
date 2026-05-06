export default function createMainPanel(workspaces, actions, activeWorkspace) {
	const workspace = actions.getActiveWorkspace(activeWorkspace)[0];

	const mainPanel = document.createElement("main");
	mainPanel.className = "main-panel";

	if (!activeWorkspace) {
		const emptyMessage = document.createElement("span");
		emptyMessage.textContent = "No workspace being selected";
		mainPanel.appendChild(emptyMessage);
	} else {
		console.log(workspace);
		const workspaceName = document.createElement("h2");
		workspaceName.textContent = workspace.name;

		const workspaceDescription = document.createElement("p");
		workspaceDescription.textContent = workspace.description
			? workspace.description
			: "No description being added";

		mainPanel.appendChild(workspaceName);
		mainPanel.appendChild(workspaceDescription);
	}

	return mainPanel;
}
