import getInputValue from "../../utils/getInputValue.js";
import createTextInput from "../commons/TextInput.js";
import createTextarea from "../commons/Textarea.js";

export default function createDialogForm({
  actions,
  formConfig = { id },
  onSubmit,
}) {
  const form = document.createElement("form");
  form.id = formConfig.id;
  form.className = "form";

  const textInput = createTextInput({
    label: "Name",
    id: "name",
    placeholder: "Workspace Name",
  });
  form.appendChild(textInput);

  const textarea = createTextarea({
    label: "Description",
    id: "description",
    placeholder: "Workspace Description",
  });

  form.appendChild(textarea);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: getInputValue(form, "name"),
      desription: getInputValue(form, "description"),
    };

    actions.handleAddWorkspace(data);

    onSubmit();
  });

  return form;
}
