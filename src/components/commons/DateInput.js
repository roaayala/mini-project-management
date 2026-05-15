export default function createDateInput({ label = "", id = "", value = "" }) {
  const formGroup = document.createElement("div");
  formGroup.className = "form-group";

  const dateInputLabel = document.createElement("label");
  dateInputLabel.textContent = label;
  dateInputLabel.setAttribute("for", id);
  dateInputLabel.className = "label";

  const dateInput = document.createElement("input");
  dateInput.type = "date";
  dateInput.id = id;
  dateInput.name = id;
  dateInput.value = value;
  dateInput.className = "date-input";

  formGroup.appendChild(dateInputLabel);
  formGroup.appendChild(dateInput);

  return formGroup;
}
