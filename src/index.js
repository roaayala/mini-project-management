import "./style.css";
import App from "./models/App.js";
import AppControllers from "./controllers/AppControllers.js";

const app = new App();

const iconDesign = app.addWorkspace(
	"Freelance Icon Design",
	"Aset digital untuk platform stock",
);

const cityProject = iconDesign.addProject(
	"Global Architecture Collection",
	"Set ikon tema arsitektur dunia",
	"2026-05-15",
	"High",
);

const taskDigitize = cityProject.addTask(
	"Digitization & Vectoring",
	"Tracing sketsa ke format vector",
	"2026-05-10",
	"High",
);

console.log(app.workspaces);
