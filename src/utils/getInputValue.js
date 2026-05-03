export default function getInputValue(containerElement, elementId) {
	return containerElement.querySelector(`#${elementId}`).value;
}
