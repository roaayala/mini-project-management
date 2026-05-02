import createButton from "../commons/Button.js";

export default function createWorkspaceDialog() {
	const dialog = document.createElement("dialog");

	const headerTitle = document.createElement("h2");
	headerTitle.textContent = "New Workspace Details";

	const closeButton = createButton(
		"closeWorkspaceDialog",
		"btn",
		"Cancel",
		() => {
			dialog.close();
			dialog.remove();
		},
	);

	dialog.appendChild(headerTitle);
	dialog.appendChild(closeButton);

	document.querySelector(".container").appendChild(dialog);

	dialog.showModal();
}
