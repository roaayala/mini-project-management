import createTextInput from "../commons/TextInput.js";
import createTextarea from "../commons/Textarea.js";
import getInputValue from "../../utils/getInputValue.js";

export default function createWorkspaceDialogForm({ formId, callback }) {
	const form = document.createElement("form");
	form.id = formId;
	form.method = "dialog";
	form.className = "form";

	const textInput = createTextInput({
		label: "Workspace Name",
		id: "workspaceName",
		type: "text",
		placeholder: "Write your new workspace name!",
		value: "",
	});

	const textarea = createTextarea({
		label: "Workspace Description",
		id: "workspaceDescription",
		placeholder: "Write your new workspace description!",
		value: "",
	});

	form.appendChild(textInput);
	form.appendChild(textarea);

	form.addEventListener("submit", (e) => {
		e.preventDefault();
		const workspace = {
			name: getInputValue(form, "workspaceName"),
			description: getInputValue(form, "workspaceDescription"),
		};

		console.log(workspace);

		callback();
	});

	return form;
}
