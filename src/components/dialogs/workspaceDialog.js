import createButton from "../commons/Button.js";
import workspaceDialogForm from "../forms/WorkspaceDialogForm.js";

export default function showWorkspaceDialog(dialogTitle, actions) {
	const closeDialog = () => {
		dialog.close();
		dialog.remove();
	};

	const dialog = document.createElement("dialog");
	const headerTitle = document.createElement("h2");
	headerTitle.textContent = dialogTitle;

	const addForm = workspaceDialogForm({
		formId: "workspaceDialogForm",
		onSaveWorkspace: (data) => {
			actions.saveWorkspace(data);
			closeDialog();
		},
	});

	const dialogActions = document.createElement("div");
	dialogActions.className = "dialog-actions";

	const closeButton = createButton({
		id: null,
		style: "btn",
		type: "button",
		text: "Cancel",
		callback: closeDialog,
	});

	const saveButton = createButton({
		id: null,
		style: "btn",
		type: "submit",
		text: "Save",
		callback: () => {},
	});
	saveButton.setAttribute("form", "workspaceDialogForm");

	// dialog actions
	dialogActions.appendChild(closeButton);
	dialogActions.appendChild(saveButton);

	// dialog
	dialog.appendChild(headerTitle);
	dialog.appendChild(addForm);
	dialog.appendChild(dialogActions);

	// app container
	document.querySelector(".container").appendChild(dialog);

	dialog.showModal();
}
