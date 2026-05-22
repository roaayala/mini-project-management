export default function createButton({
    id = null,
    icon,
    style = "btn",
    type = "button",
    text = "",
    callback,
}) {
    const button = document.createElement("button");

    if (id) button.id = id;
    button.className = style;
    button.type = type;

    if (icon) {
        const iconSpan = document.createElement("span");
        iconSpan.className = "material-symbols-outlined icon-button";
        iconSpan.textContent = icon;
        button.appendChild(iconSpan);
    }

    if (text) {
        const textSpan = document.createElement("span");
        textSpan.className = "icon-text";
        textSpan.textContent = text;
        button.appendChild(textSpan);
    }

    button.addEventListener("click", (e) => {
        if (type !== "submit") {
            e.preventDefault();
        }

        if (callback) {
            callback(e);
        }
    });

    return button;
}
