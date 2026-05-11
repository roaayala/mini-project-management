import createSidebarHeader from "./SidebarHeader.js";

export default function createSidebar() {
	const sidebar = document.createElement("aside");
	sidebar.className = "sidebar";

	// header
	const sidebarHeader = createSidebarHeader();
	sidebar.appendChild(sidebarHeader);

	// content

	// actions

	return sidebar;
}
