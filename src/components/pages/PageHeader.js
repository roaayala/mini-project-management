export default function createPageHeader({ item }) {
  const pageHeader = document.createElement("header");
  pageHeader.className = "page-header";

  const title = document.createElement("h2");
  title.className = "page-header__title";
  title.textContent = item.name;
  pageHeader.appendChild(title);

  const description = document.createElement("p");
  description.className = "page-header__description";

  description.textContent = item.description
    ? item.description
    : "No description";
  pageHeader.appendChild(description);

  return pageHeader;
}
