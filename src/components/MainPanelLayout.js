import createEmptyMessage from "./commons/EmptyMessage.js";
import createMainPanelHeader from "./main-panels/MainPanelHeader.js";
import createMainPanelContent from "./main-panels/MainPanelContent.js";

export default function createMainPanel(workspaces, actions, activeWorkspace) {
	const mainPanel = document.createElement("main");
	mainPanel.className = "main-panel";

	if (!activeWorkspace) {
		const emptyMessage = createEmptyMessage("No workspace being selected!");
		mainPanel.appendChild(emptyMessage);
		return mainPanel;
	}

	const workspace = actions.getActiveWorkspace(activeWorkspace)[0];

	const workspaceContainer = document.createElement("div");
	workspaceContainer.className = "workspace";

	const workspaceHeader = createMainPanelHeader({
		name: workspace.name,
		description: workspace.description,
	});

	const workspaceMain = createMainPanelContent({
		workspace: workspace,
	});

	mainPanel.appendChild(workspaceHeader);
	mainPanel.appendChild(workspaceMain);

	return mainPanel;
}
