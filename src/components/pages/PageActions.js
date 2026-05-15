import createButton from "../commons/Button";
import showDialog from "../dialog-form/Dialog";

export default function createPageActions({
  actions,
  buttonConfig = { text },
}) {
  const pageActions = document.createElement("div");
  pageActions.className = "page-actions";

  const addButton = createButton({
    text: buttonConfig.text,
    callback: () => {
      actions.showAddProjectDialog();
    },
  });
  pageActions.appendChild(addButton);

  return pageActions;
}
