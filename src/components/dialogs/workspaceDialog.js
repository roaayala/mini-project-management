import createButton from "../commons/Button.js";

export default function createWorkspaceDialog(dialogHeaderTitle) {
	const dialog = document.createElement("dialog");

	const headerTitle = document.createElement("h2");
	headerTitle.textContent = dialogHeaderTitle;

	const closeDialog = () => {
		dialog.close();
		dialog.remove();
	};

	const closeButton = createButton(
		"closeWorkspaceDialog",
		"btn",
		"Cancel",
		closeDialog,
	);

	dialog.appendChild(headerTitle);
	dialog.appendChild(closeButton);

	document.querySelector(".container").appendChild(dialog);

	dialog.showModal();
}
