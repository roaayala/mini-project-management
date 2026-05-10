import createSidebar from "./SidebarLayout.js";
import createWorkspacePage from "./pages/WorkspacePage.js";
import createProjectPage from "./pages/ProjectPage.js";
import createTaskPage from "./pages/TaskPage.js";

export default function createMainLayout(
	models,
	actions,
	activeWorkspace,
	activeProject,
	activeTask,
	activeTodo,
) {
	const workspaces = models.workspaces.items;

	const container = document.createElement("div");
	container.className = "container";

	const sidebar = createSidebar(workspaces, actions, activeWorkspace);

	// append to container
	container.appendChild(sidebar);

	const currentWorkspace = workspaces.find(
		(workspace) => workspace.id === activeWorkspace,
	);

	if (activeTodo) {
	} else if (activeTask) {
		const currentProject = currentWorkspace.projects.items.find(
			(project) => project.id === activeProject,
		);

		const currentTask = currentProject.tasks.items.find(
			(task) => task.id === activeTask,
		);

		const taskPage = createTaskPage({ task: currentTask, actions: actions });

		container.appendChild(taskPage);
	} else if (activeProject) {
		const currentProject = currentWorkspace.projects.items.find(
			(project) => project.id === activeProject,
		);

		const projectPage = createProjectPage({
			project: currentProject,
			actions: actions,
		});

		container.appendChild(projectPage);
	} else {
		const workspacePage = createWorkspacePage({
			workspace: currentWorkspace,
			actions: actions,
		});

		container.appendChild(workspacePage);
	}

	return container;
}
