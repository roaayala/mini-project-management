import "./style.css";
import App from "./models/App.js";
import AppControllers from "./controllers/AppControllers.js";

const app = new App();

console.log(app.workspaces.items);

const arr = [
	{ id: 1, title: "Hello" },
	{ id: 2, title: "Hello" },
	{ id: 3, title: "Hello" },
];
