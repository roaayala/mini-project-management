export default function createMainPanelHeader({ name, description }) {
	const workspaceHeader = document.createElement("header");
	workspaceHeader.className = "workspace-header";

	const headerName = document.createElement("h2");
	headerName.textContent = name;

	const headerDescription = document.createElement("p");
	headerDescription.textContent = description
		? description
		: "No description being added";

	workspaceHeader.appendChild(headerName);
	workspaceHeader.appendChild(headerDescription);

	return workspaceHeader;
}
