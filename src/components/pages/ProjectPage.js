import createEmptyMessage from "../commons/EmptyMessage";
import createButton from "../commons/Button";
import createPageHeader from "./PageHeader";
import createPageActions from "./PageActions";

export default function createProjectPage({ project, tasks, actions }) {
  const page = document.createElement("main");
  page.className = "page-wrapper";

  // if no project active
  if (!actions.getActiveProject()) {
    const emptyMessage = createEmptyMessage("No project being active!");
    page.appendChild(emptyMessage);
    return page;
  }

  const header = createPageHeader({ item: project });
  page.appendChild(header);

  return page;
}
