import createButton from "../commons/Button";

export default function createPageAction({
  buttonConfig = { text, callback },
}) {
  const pageAction = document.createElement("div");
  pageAction.className = "page-actions";

  const addButton = createButton({
    text: buttonConfig.text,
    callback: () => {
      buttonConfig.callback();
    },
  });
  pageAction.appendChild(addButton);

  return pageAction;
}
