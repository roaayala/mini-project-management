import createEmptyMessage from "../commons/EmptyMessage.js";

export default function createMainPanelContent({ workspace }) {
	const mainPanelContent = document.createElement("main");
	mainPanelContent.className = "workspace-content";

	if (workspace.projects.items.length === 0) {
		const emptyMessage = createEmptyMessage("No project being added!");
		mainPanelContent.appendChild(emptyMessage);
	}

	return mainPanelContent;
}
