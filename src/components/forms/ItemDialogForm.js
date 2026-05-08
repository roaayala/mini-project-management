import createTextInput from "../commons/TextInput.js";
import createTextarea from "../commons/Textarea.js";
import getInputValue from "../../utils/getInputValue.js";

export default function createItemDialogForm({
	formId,
	initialData,
	onSaveForm,
	textInputElement = { label, id, type, placeholder },
	textareaElement = { label, id, placeholder },
}) {
	const form = document.createElement("form");
	form.id = formId;
	form.method = "dialog";
	form.className = "form";

	const textInput = createTextInput({
		label: textInputElement.label,
		id: textInputElement.id,
		type: textInputElement.type,
		placeholder: textInputElement.placeholder,
		value: initialData ? initialData.name : "",
	});

	const textarea = createTextarea({
		label: textareaElement.label,
		id: textareaElement.id,
		placeholder: textareaElement.placeholder,
		value: initialData ? initialData.description : "",
	});

	form.appendChild(textInput);
	form.appendChild(textarea);

	return form;
}
