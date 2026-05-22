import createButton from "../commons/Button.js";

export default function createSidebarAction({ actions }) {
    const sidebarAction = document.createElement("div");
    sidebarAction.className = "sidebar__action";

    const addButton = createButton({
        icon: "add",
        text: "New Project",
        style: "btn btn-primary",
        callback: () => {
            actions.showAddProjectDialog();
        },
    });
    sidebarAction.appendChild(addButton);

    return sidebarAction;
}
