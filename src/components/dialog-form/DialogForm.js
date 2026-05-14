import getInputValue from "../../utils/getInputValue.js";
import createTextInput from "../commons/TextInput.js";
import createTextarea from "../commons/Textarea.js";

export default function createDialogForm({
  initialData,
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
    value: initialData ? initialData.name : "",
  });
  form.appendChild(textInput);

  const textarea = createTextarea({
    label: "Description",
    id: "description",
    placeholder: "Workspace Description",
    value: initialData ? initialData.desription : "",
  });

  form.appendChild(textarea);

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = {
      name: getInputValue(form, "name"),
      desription: getInputValue(form, "description"),
    };

    onSubmit(data);
  });

  return form;
}
