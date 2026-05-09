import createEmptyMessage from "../commons/EmptyMessage.js";

export default function createPageContent({ workspace, actions }) {
	const pageContent = document.createElement("main");
	pageContent.className = "page-content";

	const projects = workspace.projects.items;

	if (projects.length === 0) {
		const emptyMessage = createEmptyMessage("No project being added!");
		pageContent.appendChild(emptyMessage);

		return pageContent;
	}

	return pageContent;
}
