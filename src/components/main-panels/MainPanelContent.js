import createEmptyMessage from "../commons/EmptyMessage.js";
import createButton from "../commons/Button.js";
import showItemDialog from "../dialogs/ItemDialog.js";

export default function createMainPanelContent({ workspace, actions }) {
	const mainPanelContent = document.createElement("main");
	mainPanelContent.className = "workspace-content";

	if (!workspace) {
		const emptyMessage = createEmptyMessage("No project being added!");
		mainPanelContent.appendChild(emptyMessage);
		mainPanelContent.appendChild(showButton);
		return mainPanelContent;
	}

	const currentWorkspace = workspace.projects.items;
	currentWorkspace.forEach((project) => {
		const itemContainer = document.createElement("div");
		itemContainer.id = project.id;
		itemContainer.className = "project-item";

		const itemName = document.createElement("span");
		itemName.className = "project-item__title";
		itemName.textContent = project.name;

		const editButton = createButton({
			text: "Edit",
			callback: (e) => {
				e.stopPropagation();
				console.log("edit");
			},
		});

		const deleteButton = createButton({
			text: "Delete",
			callback: (e) => {
				e.stopPropagation();
				console.log("delete");
			},
		});

		itemContainer.appendChild(itemName);
		itemContainer.appendChild(editButton);
		itemContainer.appendChild(deleteButton);

		mainPanelContent.appendChild(itemContainer);
	});

	const showButton = createButton({
		id: "projectDialog",
		style: "btn btn-primary",
		type: "button",
		text: "New Project",
		callback: () => {
			showItemDialog({
				dialogTitle: "Project Details",
				formId: "projectDialogForm",
				initialData: null,
				onSave: actions.saveProject,
				onEdit: actions.editProject,
			});
		},
	});

	mainPanelContent.appendChild(showButton);

	return mainPanelContent;
}
