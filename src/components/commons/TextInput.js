export default function createTextInput({
	label = "",
	id = "",
	placeholder = "",
	value = "",
}) {
	const formGroup = document.createElement("div");
	formGroup.className = "form-group";

	const textInputLabel = document.createElement("label");
	textInputLabel.textContent = label;
	textInputLabel.setAttribute("for", id);
	textInputLabel.className = "label";

	const textInput = document.createElement("input");
	textInput.type = "text";
	textInput.id = id;
	textInput.name = id;
	textInput.placeholder = placeholder;
	textInput.value = value;
	textInput.className = "text-input";
	textInput.required = true;

	formGroup.appendChild(textInputLabel);
	formGroup.appendChild(textInput);

	return formGroup;
}
