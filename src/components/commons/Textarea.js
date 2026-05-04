export default function createTextarea({
	label = "",
	id = "",
	placeholder = "",
	value = "",
}) {
	const formGroup = document.createElement("div");
	formGroup.className = "form-group";

	const textareaLabel = document.createElement("label");
	textareaLabel.textContent = label;
	textareaLabel.setAttribute("for", id);
	textareaLabel.className = "label";

	const textarea = document.createElement("textarea");
	textarea.id = id;
	textarea.name = id;
	textarea.placeholder = placeholder;
	textarea.value = value;
	textarea.className = "textarea";

	formGroup.appendChild(textareaLabel);
	formGroup.appendChild(textarea);

	return formGroup;
}
