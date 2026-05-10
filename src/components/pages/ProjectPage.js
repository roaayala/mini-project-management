import createPageHeader from "./PageHeader.js";
import createPageContent from "./PageContent.js";
import createPageAction from "./PageAction.js";

import createEmptyMessage from "../commons/EmptyMessage.js";

export default function createProjectPage({ project, actions }) {
	const pageWrapper = document.createElement("div");
	pageWrapper.className = "page-wrapper";

	const projectHeader = createPageHeader({
		name: project.name,
		description: project.description,
	});
	pageWrapper.appendChild(projectHeader);

	const tasks = project.tasks.items;
	console.log(tasks);

	const projectContent = createPageContent({
		items: tasks,
		actions: actions,
		emptyMessageText: "No task being added!",
		setActiveItem: actions.setActiveTask,
		dialogConfig: {
			title: "Task",
			formId: "taskDialogForm",
			onSaveItem: actions.saveTask,
			onEditItem: actions.EditTask,
		},
		onDelete: actions.deleteTask,
	});

	pageWrapper.appendChild(projectHeader);
	pageWrapper.appendChild(projectContent);

	return pageWrapper;
}
