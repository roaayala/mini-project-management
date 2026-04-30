import createSidebar from "./sidebar.js";
import createMainPanel from "./MainPanel.js";

export default function createMainLayout() {
	const container = document.createElement("div");
	container.classList.add("container");

	const sidebar = createSidebar();

	const mainPanel = createMainPanel();

	// append to container
	container.appendChild(sidebar);
	container.appendChild(mainPanel);

	return container;
}
