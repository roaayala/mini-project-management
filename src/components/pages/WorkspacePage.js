import createPageHeader from "./PageHeader.js";
import createPageContent from "./PageContent.js";
import createPageAction from "./PageAction.js";

import createEmptyMessage from "../commons/EmptyMessage.js";

export default function createWorkspacePage({
	workspace,
	actions,
	activeProject,
}) {
	const pageWrapper = document.createElement("div");
	pageWrapper.className = "page-wrapper";

	if (!workspace) {
		const emptyMessage = createEmptyMessage("No workspace being selected!");
		pageWrapper.appendChild(emptyMessage);

		return pageWrapper;
	}

	const workspaceHeader = createPageHeader({
		name: workspace.name,
		description: workspace.description,
	});

	const workspaceContent = createPageContent({
		workspace: workspace,
		actions: actions,
		activeProject: activeProject,
	});

	const workspaceAction = createPageAction({
		buttonElement: { text: "New Project" },
		itemDialogElement: {
			title: "Project Details",
			formId: "projectDialogForm",
			initialData: null,
			onSave: actions.saveProject,
			onEdit: actions.editProject,
		},
	});

	pageWrapper.appendChild(workspaceHeader);
	pageWrapper.appendChild(workspaceContent);
	pageWrapper.appendChild(workspaceAction);
	return pageWrapper;
}
